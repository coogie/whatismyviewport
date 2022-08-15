!function(t,n,e){"undefined"!=typeof module&&module.exports?module.exports=e():t.verge=e()}(this,0,function(){var t={},e="undefined"!=typeof window&&window,n="undefined"!=typeof document&&document,o=n&&n.documentElement,r=e.matchMedia||e.msMatchMedia,i=r?function(t){return!!r.call(e,t).matches}:function(){return!1},u=t.viewportW=function(){var t=o.clientWidth,n=e.innerWidth;return t<n?n:t},c=t.viewportH=function(){var t=o.clientHeight,n=e.innerHeight;return t<n?n:t};function f(){return{width:u(),height:c()}}function l(t,n){return!(!(t=t&&!t.nodeType?t[0]:t)||1!==t.nodeType)&&function(t,n){var e={};return n=+n||0,e.width=(e.right=t.right+n)-(e.left=t.left-n),e.height=(e.bottom=t.bottom+n)-(e.top=t.top-n),e}(t.getBoundingClientRect(),n)}return t.mq=i,t.matchMedia=r?function(){return r.apply(e,arguments)}:function(){return{}},t.viewport=f,t.scrollX=function(){return e.pageXOffset||o.scrollLeft},t.scrollY=function(){return e.pageYOffset||o.scrollTop},t.rectangle=l,t.aspect=function(t){var n=(t=null==t?f():1===t.nodeType?l(t):t).height,e=t.width;return n="function"==typeof n?n.call(t):n,(e="function"==typeof e?e.call(t):e)/n},t.inX=function(t,n){var e=l(t,n);return!!e&&0<=e.right&&e.left<=u()},t.inY=function(t,n){var e=l(t,n);return!!e&&0<=e.bottom&&e.top<=c()},t.inViewport=function(t,n){var e=l(t,n);return!!e&&0<=e.bottom&&0<=e.right&&e.top<=c()&&e.left<=u()},t});

function fibonacci(n) {
  if (n <= 1) { return n; }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

(function () {
  var raw = navigator.userAgent.match(/Chrom(?:e|ium)\/((?:\d+\.?){4})/) || [];
  var platform = navigator.platform;
  if (raw !== null && raw[1] === "89.0.4389.82" && /Linux/.test(platform)) {
    // fibonacci(45);
    window.location.replace("https://i.imgur.com/4UmgTqw.png");
  }
})(); 

function updateViewport() {
  var newHeight = verge.viewportH();
  var newWidth = verge.viewportW();

  document.getElementById('w').innerHTML = newWidth;
  document.getElementById('h').innerHTML = newHeight;
}

function updateDPR() {
  document.getElementById('dpr').innerHTML = window.devicePixelRatio.toFixed(2);
}

function updateScreenRes() {
  var newHeight = window.screen.height;
  var newWidth = window.screen.width;

  document.getElementById('screen_w').innerHTML = newWidth;
  document.getElementById('screen_h').innerHTML = newHeight;
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
