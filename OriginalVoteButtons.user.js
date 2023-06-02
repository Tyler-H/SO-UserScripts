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
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    GM_addStyle(`
        /* Revert vote count styling */
        #content .js-vote-count {
            color: var(--black-500) !important;
            font-size: var(--fs-title) !important;
            font-weight: 500 !important;
            padding-top: var(--su6) !important;
            padding-bottom: var(--su6) !important;
        }

        .js-voting-container {
            padding: 4px;
        }

        .js-vote-down-btn .iconArrowDown, .js-vote-up-btn .iconArrowUp {
            transform: scale(2);
        }

        button[class^='js-vote-'] {
            /* remove border & revert padding */
            border: 1px solid transparent !important;
            padding: 1px 4px;

            /* revert :hover styles */
            background-color: transparent !important;
        }

        /* revert :hover styles */
        button[class^="js-vote-"].s-btn:hover {
            color: var(--theme-primary-color) !important;
            background: none !important;
        }

        /* revert :focus styles */
        button[class^="js-vote-"].s-btn:focus {
            box-shadow: none;
        }

        /* revert :active styles */
        button[class^="js-vote-"].s-btn:active {
            background: none
        }

        /* de-emphasize color brightness of buttons while leaving brightness of score */
        button[class^="js-vote-"].fc-black-700 {
            color: rgb(186, 191, 196) !important;
        }
    `);
})();