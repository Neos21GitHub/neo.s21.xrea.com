!function c(i,u,a){function f(t,e){if(!u[t]){if(!i[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(d)return d(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=u[t]={exports:{}};i[t][0].call(o.exports,function(e){return f(i[t][1][e]||e)},o,o.exports,c,i,u,a)}return u[t].exports}for(var d="function"==typeof require&&require,e=0;e<a.length;e++)f(a[e]);return f}({1:[function(e,t,r){"use strict";document.addEventListener("DOMContentLoaded",function(){[].slice.call(document.querySelectorAll("#main > section section")).forEach(function(e){var t=e.getAttribute("id");if(t&&"".concat(t).trim()){var r,n=document.createElement("a");n.className="js-anchor",n.href="#".concat(t),(r=e.querySelector("h2, h3, h4, h5, h6"))&&r.appendChild(n)}})}),document.addEventListener("touchstart",function(){})},{}]},{},[1]);