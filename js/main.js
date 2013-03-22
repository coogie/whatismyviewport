/*! verge 1.6.3 | viewport utils by @ryanve | @link verge.airve.com | @license MIT */
(function(g,d,f){"undefined"!=typeof module&&module.exports?module.exports=f():g[d]=f()})(this,"verge",function(){function g(e,c,b){var a={};e&&!e.nodeType&&(e=e[0]);if(e&&1===e.nodeType)return c="number"==typeof c&&!b&&c||0,e=e.getBoundingClientRect(),a.width=(a.right=e.right+c)-(a.left=e.left-c),a.height=(a.bottom=e.bottom+c)-(a.top=e.top-c),a}var d=window,f=document.documentElement,l=d.Modernizr,h=d.matchMedia||d.msMatchMedia,m=h?function(a){return!!h.call(d,a).matches}:function(){return!1},a=
function(a,c,b){return f[b]<d[c]&&m("(min-"+a+":"+d[c]+"px)")?function(){return d[c]}:function(){return f[b]}},j=a("width","innerWidth","clientWidth"),k=a("height","innerHeight","clientHeight"),a={};a.mq=!h&&l&&l.mq||m;a.matchMedia=h?function(){return h.apply(d,arguments)}:function(){return{}};a.viewportW=j;a.viewportH=k;a.scrollX=function(){return d.pageXOffset||f.scrollLeft};a.scrollY=function(){return d.pageYOffset||f.scrollTop};a.rectangle=g;a.inX=function(a,c){var b=g(a,c);return!!b&&0<=b.right&&
b.left<=j()};a.inY=function(a,c){var b=g(a,c);return!!b&&0<=b.bottom&&b.top<=k()};a.inViewport=function(a,c){var b=g(a,c);return!!b&&0<=b.bottom&&0<=b.right&&b.top<=k()&&b.left<=j()};return a});

if (window.addEventListener) { // Mozilla, Netscape, Firefox
    window.addEventListener('load', displayViewport, false);
    window.addEventListener('resize', displayViewport, false);
    window.addEventListener('orientationchange', displayViewport, false);
} else if (window.attachEvent) { // IE
    window.attachEvent('onload', displayViewport);
    window.attachEvent('onresize', displayViewport);
    window.attachEvent('onorientationchange', displayViewport);
}

function displayViewport(event) {
  document.getElementById('w').innerHTML = verge.viewportW();
  document.getElementById('h').innerHTML = verge.viewportH();
}