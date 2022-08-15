importScripts('/assets/js/vendor/workbox-v6.5.4/workbox-sw.js');
workbox.setConfig({
  modulePathPrefix: '/assets/js/vendor/workbox-v6.5.4/',
});

workbox.googleAnalytics.initialize({
    parameterOverrides: {
      cd1: 'offline',
    },
});
workbox.precaching.precacheAndRoute([
    { url: '/index.html',                   revision: '2022-08-15' },
    { url: '/404.html',                     revision: '2022-08-15' },
    { url: '/favicon.ico',                  revision: '2022-08-15' },
    { url: '/assets/css/main.css',          revision: '2022-08-15' },
    { url: '/assets/css/normalize.min.css', revision: '2022-08-15' },
    { url: '/assets/js/main.js',            revision: '2022-08-15' },
]);
