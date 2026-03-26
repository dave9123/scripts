// ==UserScript==
// @name         Erlangga URL Rewriter
// @namespace    https://dave9123.me/
// @version      1.0
// @description  Rewrite Erlangga QR codes into direct links
// @author       dave9123
// @match        https://media.erlanggaonline.co.id/*
// @grant        none
// ==/UserScript==

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

if (!id) return;

const base = id.split(".")[0];

const newUrl = `https://media.erlanggaonline.co.id/data/${base}/${id}.mp3`;

if (window.location.href !== newUrl) {
    window.location.replace(newUrl);
}