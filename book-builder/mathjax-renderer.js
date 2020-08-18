'use strict';

const MathJax = require("mathjax-node-svg2png")
const mjAPI = require("mathjax-node-page");
const jsdom = require("jsdom").JSDOM;

let _initialized = false;

exports.render = function (html, callback) {
    const document = (new jsdom(html, { features: { FetchExternalResources: false } })).window.document;
    if (!_initialized) {
        mjAPI.init(MathJax);
        _initialized = true;
    }
    mjAPI.addOutput("png", (wrapper, png) => { wrapper.innerHTML = `<img src="${png}">` })
    mjAPI.mjpage(document.body.innerHTML, { MathJax: { SVG: { font: 'TeX' } }, extensions: 'TeX/noUndefined' }, {
        png: true,
        scale: 1.7,
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
