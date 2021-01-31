!function(t,n,e){"undefined"!=typeof module&&module.exports?module.exports=e():t.verge=e()}(this,0,function(){var t={},e="undefined"!=typeof window&&window,n="undefined"!=typeof document&&document,o=n&&n.documentElement,r=e.matchMedia||e.msMatchMedia,i=r?function(t){return!!r.call(e,t).matches}:function(){return!1},u=t.viewportW=function(){var t=o.clientWidth,n=e.innerWidth;return t<n?n:t},c=t.viewportH=function(){var t=o.clientHeight,n=e.innerHeight;return t<n?n:t};function f(){return{width:u(),height:c()}}function l(t,n){return!(!(t=t&&!t.nodeType?t[0]:t)||1!==t.nodeType)&&function(t,n){var e={};return n=+n||0,e.width=(e.right=t.right+n)-(e.left=t.left-n),e.height=(e.bottom=t.bottom+n)-(e.top=t.top-n),e}(t.getBoundingClientRect(),n)}return t.mq=i,t.matchMedia=r?function(){return r.apply(e,arguments)}:function(){return{}},t.viewport=f,t.scrollX=function(){return e.pageXOffset||o.scrollLeft},t.scrollY=function(){return e.pageYOffset||o.scrollTop},t.rectangle=l,t.aspect=function(t){var n=(t=null==t?f():1===t.nodeType?l(t):t).height,e=t.width;return n="function"==typeof n?n.call(t):n,(e="function"==typeof e?e.call(t):e)/n},t.inX=function(t,n){var e=l(t,n);return!!e&&0<=e.right&&e.left<=u()},t.inY=function(t,n){var e=l(t,n);return!!e&&0<=e.bottom&&e.top<=c()},t.inViewport=function(t,n){var e=l(t,n);return!!e&&0<=e.bottom&&0<=e.right&&e.top<=c()&&e.left<=u()},t});

function updateViewport() {
  document.getElementById('w').innerHTML = verge.viewportW();
  document.getElementById('h').innerHTML = verge.viewportH();
}

function updateDPR() {
  document.getElementById('dpr').innerHTML = window.devicePixelRatio.toFixed(2);
}

function updateScreenRes() {
  document.getElementById('screen_w').innerHTML = window.screen.width;
  document.getElementById('screen_h').innerHTML = window.screen.height;
}

function doCalcs() {
  requestAnimationFrame(updateDPR);
  requestAnimationFrame(updateViewport);
  requestAnimationFrame(updateScreenRes);
}

window.addEventListener('load', doCalcs, false);
window.addEventListener('resize', doCalcs, false);
window.addEventListener('orientationchange', doCalcs, false);

document.querySelectorAll('.Footer__toggle')[0].addEventListener('click', function() {
  document.querySelectorAll('.Footer')[0].classList.toggle('Expanded');
}, false);
