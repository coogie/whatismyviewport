const cacheName = 'whatismyviewport-app';
const staticAssets = [
    './',
    './index.html',
    './favicon.ico',
    './css/main.css',
    './css/normalize.min.css',
    './js/main.js',
    './js/vendor/html5shiv.min.js',
];

importScripts('js/sw-offline-google-analytics/sw-offline-google-analytics.prod.v0.0.25.js');
goog.offlineGoogleAnalytics.initialize();

self.addEventListener('install', async _ => {
    console.log('[Service Worker] Installed');
    let cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching Static Assets');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    event.respondWith(
        async function() {
            let cachedResponse = await caches.match(event.request);
            if (cachedResponse) {
                console.log('[Service Worker] Fetching cached assets');
                return cachedResponse;
            }
            return await fetch(event.request);
        }()
    );
});


