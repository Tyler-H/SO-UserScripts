// ==UserScript==
// @name         Revert "Vote" label to 0 in Post Scores
// @homepage     https://github.com/Tyler-H/SO-UserScripts/blob/master/RevertVoteLabelTo0.js
// @version      1.0
// @description  Reverts the "Vote" word to the number zero on Stack Exchange sites where you haven't voted on them, which is waht they were pre-2025-01-07
// @author       TylerH
// @match        https://*.stackoverflow.com/*
// @match        https://*.stackexchange.com/*
// @match        https://*.superuser.com/*
// @match        https://stackapps.com/*
// @match        https://*.serverfault.com/*
// @match        https://*.askubuntu.com/*
// @match        https://*.mathoverflow.net/*
// ==/UserScript==

(function() {
    //store all post score labels in a static NodeList
    let allPostLabels = document.querySelectorAll("span[class*='js-exp-vote-zero']");

    //loop through each post score label in the NodeList. Where the innerHTML equals "Vote", replace it with "0" instead.
    allPostLabels.forEach ( x => x.innerHTML = x.innerHTML.replace('Vote','0'));
})();
