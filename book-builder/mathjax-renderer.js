'use strict';

const mjAPI = require("mathjax-node-page");
const jsdom = require("jsdom").JSDOM;

function tryStartApi() {
    if (!tryStartApi.apiStarted) {
        mjAPI.start();
        tryStartApi.apiStarted = true;
    }
}
tryStartApi.apiStarted = false;

exports.render = function (html, callback) {
    const document = (new jsdom(html, { features: { FetchExternalResources: false } })).window.document;
    mjAPI.mjpage(document.body.innerHTML, { MathJax: { SVG: { font: 'TeX' } }, extensions: 'TeX/noUndefined' }, {
        svg: true,
        ex: 6.1, width: 200,
        linebreaks: true,
        singleDollars: false
    }, function (result) {
        document.body.innerHTML = result;
        let HTML = `<!DOCTYPE html>\n${document.documentElement.outerHTML}`;

        // Without this replace polish letters are in monospace (very ugly).
        HTML = HTML.replace(/font-family="monospace"/g, 'font-family="STIXGeneral,\'Arial Unicode MS\',serif"');

        callback(null, HTML);
    });
};
