// ==UserScript==
// @name         Original Stack Overflow Vote Buttons
// @homepage     https://github.com/Tyler-H/SO-UserScripts/blob/master/OriginalVoteButtons.js
// @version      1.1
// @description  Reverts post vote buttons on Stack Exchange sites to the previous implementation, pre-2022-06-24
// @author       TylerH
// @match        https://*.stackoverflow.com/*
// @match        https://*.stackexchange.com/*
// @match        https://*.superuser.com/*
// @match        https://stackapps.com/*
// @match        https://*.serverfault.com/*
// @match        https://*.askubuntu.com/*
// @match        https://*.mathoverflow.net/*
// ==/UserScript==

(function () {
    const allbtns = document.querySelectorAll("button[class^='js-vote-']");
    const downsvg = document.querySelectorAll('.js-vote-down-btn .iconArrowDown');
    const upsvg = document.querySelectorAll('.js-vote-up-btn .iconArrowUp');
    const downpath = document.querySelectorAll('button.js-vote-down-btn svg.iconArrowDown path');
    const uppath = document.querySelectorAll('button.js-vote-up-btn svg.iconArrowUp path');

    // set attribute values for the SVG elements
    [...downsvg, ...upsvg]
        .forEach(svg => {
            svg.setAttribute("height", "36");
            svg.setAttribute("width", "36");
            svg.setAttribute("viewBox", "0 0 36 36");
        });

    // set SVG path values to resize the SVGs themselves
    downpath.forEach(path => path.setAttribute('d', 'M2 11h32L18 27 2 11Z'));
    uppath.forEach(path => path.setAttribute('d', 'M2 25h32L18 9 2 25Z'));

    //remove border & revert padding
    allbtns.forEach(x => x.setAttribute('style', 'border: 1px solid transparent !important; padding: 1px 4px'));

    //revert hover styles
    document.head.insertAdjacentHTML("beforeend", `<style>button[class^="js-vote-"].s-btn:hover { color: var(--blue-500) !important; background: none !important; }</style>`);
    allbtns.forEach(x => x.style.setProperty('background-color', 'transparent', 'important'));

    //revert :focus styles
    document.head.insertAdjacentHTML("beforeend", `<style>button[class^="js-vote-"].s-btn:focus { box-shadow: none; }</style>`);

    //revert :active styles
    document.head.insertAdjacentHTML("beforeend", `<style>button[class^="js-vote-"].s-btn:active { background: none }</style>`);

    //de-emphasize color brightness of buttons while leaving brightness of score
    //allbtns.forEach ( x => x.style.setProperty('color','rgb(105, 111, 117)',''));
    document.head.insertAdjacentHTML("beforeend", `<style>button[class^="js-vote-"].fc-black-700 { color: rgb(186, 191, 196) !important; }</style>`);
})();
