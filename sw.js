const modulePathPrefix = '/assets/js/vendor/workbox-v6.5.4/';
importScripts(`${modulePathPrefix}workbox-sw.js`);
workbox.setConfig({ modulePathPrefix });
workbox.loadModule('workbox-google-analytics')
workbox.loadModule('workbox-precaching')

workbox.googleAnalytics.initialize({
    parameterOverrides: {
      cd1: 'offline',
    },
});
workbox.precaching.precacheAndRoute([
    { url: '/index.html',                   revision: '1' },
    { url: '/404.html',                     revision: '1' },
    { url: '/favicon.ico',                  revision: '1' },
    { url: '/assets/css/main.css',          revision: '1' },
    { url: '/assets/css/normalize.min.css', revision: '1' },
    { url: '/assets/js/main.js',            revision: '1' },
]);
