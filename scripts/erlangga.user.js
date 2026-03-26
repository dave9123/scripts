// ==UserScript==
// @name         Erlangga URL Rewriter
// @namespace    https://dave9123.me/
// @version      1.1
// @description  Rewrite Erlangga QR codes into direct links
// @author       dave9123
// @match        https://media.erlanggaonline.co.id/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    if (!id) return;

    const base = id.split('.')[0];
    if (!base) return;

    const newUrl = new URL(url.origin);
    newUrl.pathname = `/data/${encodeURIComponent(base)}/${encodeURIComponent(id)}`;

    if (window.location.href !== newUrl.href) {
        window.location.replace(newUrl.href);
    }
})();
