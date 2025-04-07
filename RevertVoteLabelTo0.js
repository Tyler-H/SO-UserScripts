// ==UserScript==
// @name         Revert "Vote" label to 0 in Post Scores
// @homepage     https://github.com/Tyler-H/SO-UserScripts/blob/master/RevertVoteLabelTo0.js
// @version      2.0
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

window.addEventListener("load", function(event){
    //this is required because the label replacement A/B test appears to be implemented via a post-load JS script...
    //instead of being done properly on the SO server side.
    setTimeout(updatePostLabels, 50);

    function updatePostLabels() {
        //store all post score labels in a static NodeList
        let allPostLabels = document.querySelectorAll("div.js-vote-count");

        //loop through each post score label in the NodeList. Where the innerHTML equals "Vote", replace it with "0" instead.
        allPostLabels.forEach ( x => x.innerHTML = x.innerHTML.replace('Vote','0'));
        //loop through each post score label in the Nodelist and reset the font-size back to 21px. Why it was set smaller for the Vote label is unknown by anyone with sense.
        allPostLabels.forEach ( y => y.setAttribute('style', 'font-size: 21px !important'));
    };
});
