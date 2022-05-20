/*********************************************************************************
* MIT License
*
* Copyright (c) 2022 Fabian Gillholm
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
*     The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
*    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
**********************************************************************************/

// ==UserScript==
// @name         Vecka.nu-integration
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Seamlessly adds a helpful week number indicator to the Frånvarotavla.
// @author       Fabian Gillholm
// @match        http://franvarohlm.im.se/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=im.se
// @grant        none
// @require      https://code.jquery.com/ui/1.13.1/jquery-ui.js
// ==/UserScript==

(function() {
    'use strict';

    Date.prototype.getWeek = function () { return $.datepicker.iso8601Week(this); }

    let date = new Date();
    let week = date.getWeek();

    let dateBox = $('<div/>',
    {
        text: week,
        style: 'position: absolute;top:50%;right:0;left:0;margin:-110px 0 0 0;height:220px;text-align:center;font-size:260px;font-family:Arial, serif;line-height:227px;font-weight:bold;color:#1c7bb7;z-index:2147483647;'

    });

    dateBox.insertAfter("div[name='clock'");
})();
