// ==UserScript==
// @name         Original Vote Buttons
// @homepage     https://github.com/Tyler-H/SO-UserScripts/
// @version      1.0
// @description  Reverts post vote buttons on Stack Overflow to the previous implementation, pre-2022-06-24
// @author       TylerH
// @match        https://stackoverflow.com/questions/*
// @grant        none
// ==/UserScript==

(function() {
    let allbtns = document.querySelectorAll("button[class^='js-vote-']");
    let downsvg = document.querySelectorAll('.js-vote-down-btn .iconArrowDown');
    let upsvg = document.querySelectorAll('.js-vote-up-btn .iconArrowUp');
    let downpath = document.querySelectorAll('button.js-vote-down-btn svg.iconArrowDown path');
    let uppath = document.querySelectorAll('button.js-vote-up-btn svg.iconArrowUp path');
    
    // set attribute values for the SVG elements
    downsvg.forEach ( x => x.setAttribute('height','36'));
    downsvg.forEach ( x => x.setAttribute('width','36'));
    downsvg.forEach ( x => x.setAttribute('viewBox','0 0 36 36'));
    
    upsvg.forEach ( x => x.setAttribute('height','36'));
    upsvg.forEach ( x => x.setAttribute('width','36'));
    upsvg.forEach ( x => x.setAttribute('viewBox','0 0 36 36'));
    
    // set SVG path values to resize the SVGs themselves
    downpath.forEach ( x => x.setAttribute('d','M2 11h32L18 27 2 11Z'));
    uppath.forEach ( x => x.setAttribute('d','M2 25h32L18 9 2 25Z'));
    
    //remove border & revert padding
    allbtns.forEach ( x => x.setAttribute('style','border: 1px solid transparent !important; padding: 1px 4px'));
    
    //revert hover styles
    document.head.insertAdjacentHTML("beforeend",`<style>button[class^="js-vote-"].s-btn:hover { color: var(--blue-500) !important; background: none !important; }</style>`);
    allbtns.forEach ( x => x.style.setProperty('background-color','transparent','important'));
    
    //revert :focus styles
    document.head.insertAdjacentHTML("beforeend",`<style>button[class^="js-vote-"].s-btn:focus { box-shadow: none; }</style>`);
    
    //revert :active styles
    document.head.insertAdjacentHTML("beforeend",`<style>button[class^="js-vote-"].s-btn:active { background: none }</style>`);
})();