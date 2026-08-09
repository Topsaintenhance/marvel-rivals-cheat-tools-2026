/**
 * MarvelRivalsCheat — Pages helper (UI only).
 * Keyword: marvel rivals cheat
 */
(function (global) {
  'use strict';

  var Product = {
    name: 'MarvelRivalsCheat',
    keyword: 'marvel rivals cheat',
    channel: 'github-pages'
  };

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function bindDownload(btn, url) {
    if (!btn || !url) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = url;
    });
  }

  global.MarvelRivalsCheatUI = { Product: Product, ready: ready, bindDownload: bindDownload };
})(typeof window !== 'undefined' ? window : globalThis);
