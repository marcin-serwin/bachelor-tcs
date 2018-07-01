'use strict';

const mjAPI = require("mathjax-node/lib/mj-page.js");
const jsdom = require("jsdom").jsdom;

function tryStartApi() {
    if (!tryStartApi.apiStarted) {
        mjAPI.start();
        tryStartApi.apiStarted = true;
    }
}
tryStartApi.apiStarted = false;

exports.render = function (html, callback) {
    mjAPI.config({MathJax: {SVG: {font: 'TeX'}}, extensions: 'TeX/noUndefined'});

    tryStartApi();

    const document = jsdom(html, {features: {FetchExternalResources: false}});
    mjAPI.typeset({
        html: document.body.innerHTML,
        renderer: 'SVG',
        inputs: ['TeX'],
        ex: 6.1, width: 200,
        linebreaks: true,
        singleDollars: false
    }, function(result) {
        document.body.innerHTML = result.html;
        let HTML = `<!DOCTYPE html>\n${document.documentElement.outerHTML}`;

        // Without this replace polish letters are in monospace (very ugly).
        HTML = HTML.replace(/font-family="monospace"/g, 'font-family="STIXGeneral,\'Arial Unicode MS\',serif"');

        callback(null, HTML);
    });
};
