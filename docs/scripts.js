!function a(c,i,u){function d(t,e){if(!i[t]){if(!c[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(f)return f(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=i[t]={exports:{}};c[t][0].call(o.exports,function(e){return d(c[t][1][e]||e)},o,o.exports,a,c,i,u)}return i[t].exports}for(var f="function"==typeof require&&require,e=0;e<u.length;e++)d(u[e]);return d}({1:[function(e,t,r){"use strict";function n(){Array.prototype.forEach.call(document.querySelectorAll("#main > section section"),function(e){var t=e.getAttribute("id");if(t&&"".concat(t).trim()){var r,n=document.createElement("a");n.className="js-anchor",n.href="#".concat(t),(r=e.querySelector("h2, h3, h4, h5, h6"))&&r.appendChild(n)}})}document.readyState&&"interactive"!==document.readyState?"loading"===document.readyState?document.addEventListener("DOMContentLoaded",n):n():window.addEventListener("load",n),document.addEventListener("touchstart",function(){})},{}]},{},[1]);