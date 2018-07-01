'use strict';

var argv = require('minimist')(process.argv.slice(2));

if (argv['help']) {
    console.log('book-builder [options] [list of questions to render]\n\t--help Print this message\n\t--mathjax-online Use online rendering of equations.\n\t--clobber Override existing files when copying to HTML folder.');
    process.exit(0);
}

const fs = require('fs-extra');
const path = require('path')
const pug = require('pug');
const _ = require('highland');
const highlightjs = require('highlight.js');

const md = require('markdown-it')({
  html: true,
  linkify: true,
  highlight: function (str, lang) {
    if (lang && highlightjs.getLanguage(lang)) {
      try {
        return highlightjs.highlight(lang, str).value;
      } catch (exc) {}
    }
    return '';
  }
});

md.linkify.tlds('.md', false);

md.use(require('markdown-it-mathjax'));

function waitForStreamToEnd(streamToEnd) {
    function *infinite() {
        while (true) {
            yield {};
        }
    }

    return stream => stream
        .zip(_([
            streamToEnd.last(),
            _(infinite())
        ]).sequence())
        .map(arr => arr[0]);
}

const baseDir = process.cwd();
const solutionsDir = path.join(baseDir, 'rozwiązania');
const templatesDir = path.join(baseDir, 'book-builder/templates');
const outputDir = path.join(baseDir, 'HTML');
const staticDir = path.join(baseDir, 'book-builder/static');
const resourcesDir = path.join(baseDir, 'resources');
const categories = {
    'I': {name: 'Przedmioty matematyczne', number: 1},
    'II': {name: 'Przedmioty programistyczno-algorytmiczne', number: 2},
    'III': {name: 'Przedmioty techniczne', number: 3}
}

const readFileStream = _.wrapCallback(fs.readFile);
const writeFileStream = _.wrapCallback(fs.writeFile);
const readdirStream = _.wrapCallback(fs.readdir);
const lstatStream = _.wrapCallback(fs.lstat);
const ensureDirStream = _.wrapCallback(fs.ensureDir);
const copyStream = _.wrapCallback(fs.copy);

let mathjaxRenderStream;
if (!argv['mathjax-online']) {
    const mathjaxRenderer = require('./mathjax-renderer.js');
    mathjaxRenderStream = _.wrapCallback(mathjaxRenderer.render)
} else {
    mathjaxRenderStream = e => _([e])
}

function parseQuestionSelector(selector) {
    const result = /^(I{1,3})\.(\d+)\.(\d+)$/.exec(selector);
    if (!result) return null;
    return {
        categoryName: result[1],
        chapter: parseInt(result[2], 10),
        question: parseInt(result[3], 10),
    };
}

let questionsFilter = {};
if (argv._.length == 0) {
    questionsFilter.chapter = e => true;
    questionsFilter.question = e => true;
} else {
    let qRegExpStr = "^(?:";
    let cRegExpStr = "^(?:";
    let first = true;
    for (const selector of argv._) {
        const parsed = parseQuestionSelector(selector);
        if (parsed === null) {
            console.error("Question selector '" + selector + "' is incorrect. Correct example: 'II.3.2'");
            process.exit(1);
        }
        if (!first) {
            qRegExpStr += "|";
            cRegExpStr += "|";
        }
        qRegExpStr += parsed.categoryName + "\\." + parsed.chapter + "\\." + parsed.question;
        cRegExpStr += parsed.categoryName + "\\." + parsed.chapter;
        first = false;
    }
    qRegExpStr += ")\\.? .*$";
    cRegExpStr += ")\\.? .*$";
    const qRegExp = new RegExp(qRegExpStr);
    const cRegExp = new RegExp(cRegExpStr);
    questionsFilter.chapter = e => cRegExp.test(e);
    questionsFilter.question = e => qRegExp.test(e);
}

// From: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function getTemplateFile(template) {
    return path.join(templatesDir, template + '.pug');
}

function parseFullChapterName(fullChapterName) {
    const result = /^(I{1,3})\.(\d+)\.? *(.*)$/.exec(fullChapterName);
    return {
        category: categories[result[1]].number,
        number: parseInt(result[2], 10),
        name: result[3].trim()
    };
}

function parseQuestionData(questionName) {
    const result = /^(I{1,3})\.(\d+)\.(\d+)\.? *(.*)$/.exec(questionName);
    return {
        category: categories[result[1]].number,
        chapter: parseInt(result[2], 10),
        question: parseInt(result[3], 10),
        chapterName: null,
        categoryName: categories[result[1]].name,
        categorySymbol: result[1],
        questionName: result[4].trim(),
        questionFull: null,
        answer: null
    };
}

function getCategoryHTMLId(obj) {
    return `cat-${obj.categorySymbol}`;
}

function getChapterHTMLId(obj) {
    return `chap-${obj.categorySymbol}.${obj.chapter}`;
}

function getQuestionHTMLId(que) {
    return `que-${que.categorySymbol}.${que.chapter}.${que.question}`;
}

// Unfortunatelly using this global variable updated in loadAnswerFile
// is simplest method to avhieve my desired goal.
const questionFileToQuestionMap = {};

function fixQuestionReferences(html) {
    for (const questionFileName of Object.keys(questionFileToQuestionMap)) {
        const linkRegExp = new RegExp('\\[(.*?)\\]\\(.*?' + escapeRegExp(questionFileName) + '\\)', 'g');
        const questionHTMLId = getQuestionHTMLId(questionFileToQuestionMap[questionFileName]);
        html = html.replace(linkRegExp, (match, title) => {
            return `<a href="#${questionHTMLId}">${title}</a>`;
        });
    }
    return html;
}

function parseAnswerFile(content, fileName /* only for debugging purposes */) {
    const getHeadingLevel = token => parseInt(token.tag.substring(1), 10);
    const setHeadingLevel = (token, level) => {
        if (level <= 6) {
            token.tag = `h${level}`;
        } else {
            token.tag = 'h6';
            if (!token.attrs) {
                token.attrs = [];
            }
            token.attrs.push(['class', `h${level}`]);
        }
    }
    const isHeading = token => token.type.startsWith('heading_');

    function visitHeadings(tokens, func) {
        for (const token of tokens) {
            if (isHeading(token)) {
                func(token);
            }
            if (token.children) {
                visitHeadings(token.children);
            }
        }
    }

    const result = /^([^]*?)\n---+\n([^]*)$/.exec(content);
    if (!result) {
        throw new Error(`Couldn't parse file content, file: "${fileName}"`);
    }

    // Brutal fix to resources pathes
    const resourcesRelativePath = path.relative(
        path.join(solutionsDir, "somedir"), resourcesDir)
    const resourcesRelativePathRegexp = new RegExp(
        escapeRegExp(resourcesRelativePath) + '/', "g");
    const markdown = result[2].replace(resourcesRelativePathRegexp, 'resources/');

    const env = {};
    const tokens = md.parse(markdown, env);

    const targetHeadingDepth = 4;
    let minHeadingDepth = 100;
    visitHeadings(tokens, token => {
        minHeadingDepth = Math.min(minHeadingDepth, getHeadingLevel(token));
    });
    const depthDiff = targetHeadingDepth - minHeadingDepth;
    if (minHeadingDepth < targetHeadingDepth) {
        visitHeadings(tokens, token => {
            let newHeadingLevel = getHeadingLevel(token) + depthDiff;
            setHeadingLevel(token, newHeadingLevel);
        });
    }
    const html = md.renderer.render(tokens, md.options, env);

    return {
        questionFull: result[1].trim(),
        answer: html
    };
}

function loadAnswerFile(filePath) {
    return readFileStream(filePath)
        .invoke('toString', ['utf8'])
        .map(obj => parseAnswerFile(obj, path.basename(filePath)))
        .map(obj => {
            const name = path.basename(filePath, ".md");
            const question = parseQuestionData(name);
            question.answer = obj.answer;
            question.questionFull = obj.questionFull;

            questionFileToQuestionMap[path.basename(filePath)] = question;

            return question;
        });
}

function loadChapter(fullChapterName) {
    const chapterDir = path.join(solutionsDir, fullChapterName);
    const chapter = parseFullChapterName(fullChapterName);
    return readdirStream(chapterDir)
        .flatten()
        .filter(fileName => {
            let matches = /^.*\.md$/.test(fileName);
            if (!matches) {
                let fullFilePath = path.relative(baseDir, path.join(chapterDir, fileName));
                console.warn(`WARN: Unexpected file in directory: "${fullFilePath}", expected .md extension, ignoring file`);
            }
            return matches;
        })
        .filter(questionsFilter.question)
        .map(fileName => path.join(chapterDir, fileName))
        .map(loadAnswerFile)
        .parallel(10)
        .map(obj => {
            if (chapter.category != obj.category || chapter.number != obj.chapter) {
                console.warn("WARN: Incompatibile metadata from chapter and question!");
            }
            obj.chapterName = chapter.name;
            return obj;
        });
}

// Here starts reactive pipeline declaration

const mkOutputDirStream = ensureDirStream(outputDir);

const contentStream = readdirStream(solutionsDir)
    .flatten()
    .filter(fileName => fileName.match(/I{1,3}\.\d+\.? *.*/))
    .flatFilter(fileName => {
        const fullPath = path.join(solutionsDir, fileName);
        return lstatStream(fullPath)
            .invoke('isDirectory');
    })
    .filter(questionsFilter.chapter)
    .map(loadChapter)
    .parallel(10)
    .stopOnError((err, push) => console.error(err))
    .sortBy((a, b) => {
        const objKey = obj => obj.category * 1000000 + obj.chapter * 1000 + obj.question;
        return objKey(a) - objKey(b);
    })
    //.tap(obj => console.log(obj.category, obj.chapter, obj.question, obj.questionName))
    .reduce([], (res, obj) => {
        // Invariant: objects comming to this functions are sorted.
        const appendIfNotExists = (arr, obj) => {
            if (arr.length < 1 || arr[arr.length - 1].number != obj.number) {
                arr.push(obj);
            }
        };
        const last = arr => arr[arr.length - 1];
        appendIfNotExists(res, {
            number: obj.category,  // needed by appendIfNotExists
            category: obj.category,
            categorySymbol: obj.categorySymbol,
            categoryName: obj.categoryName,
            chapters: []
        });
        appendIfNotExists(last(res).chapters, {
            number: obj.chapter,  // needed by appendIfNotExists
            category: obj.category,
            categorySymbol: obj.categorySymbol,
            categoryName: obj.categoryName,
            chapter: obj.chapter,
            chapterName: obj.chapterName,
            questions: []
        });
        last(last(res).chapters).questions.push(obj);
        return res;
    });

const bookRendererStream = readFileStream(getTemplateFile('book'))
    .invoke('toString', ['utf8'])
    .map(source => pug.compile(source, {
        filename: getTemplateFile('book'),
        pretty: true
    }));

const htmlOutputStream = _([contentStream, bookRendererStream])
    .zipAll0()
    .through(waitForStreamToEnd(mkOutputDirStream.fork()))
    .map(arr /*[content, renderer]*/ => arr[1]({
        md: md,
        getQuestionHTMLId: getQuestionHTMLId,
        getChapterHTMLId: getChapterHTMLId,
        getCategoryHTMLId: getChapterHTMLId,
        content: arr[0],
        remoteMathJax: argv['mathjax-online']
    }))
    .map(fixQuestionReferences)
    .flatMap(mathjaxRenderStream)
    .flatMap(html => writeFileStream(path.join(outputDir, 'index.html'), html));

const staticFileCopyingStream = _([
    {from: staticDir, to: path.join(outputDir, 'static')},
    {from: resourcesDir, to: path.join(outputDir, 'resources')},
    {from: path.join(baseDir, 'book-builder/node_modules/highlight.js/styles/github.css'), to: path.join(outputDir, 'static/hljs-github.css')}
])
    .through(waitForStreamToEnd(mkOutputDirStream.fork()))
    .flatMap(obj => copyStream(obj.from, obj.to, {clobber: !!argv['clobber']}));

_([htmlOutputStream, staticFileCopyingStream])
    .merge()
    .done(() => console.log('Done.'));
