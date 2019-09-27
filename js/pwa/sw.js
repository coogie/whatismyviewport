const cacheName = 'whatismyviewport-app';
const staticAssets = [
    '../../',
    '../../index.html',
    '../../favicon.ico',
    '../../css/',
    '../../css/main.css',
    '../../css/normalize.min.css',
    '../main.js',
    '../vendor/',
    '../vendor/html5shiv.min.js',
];

self.addEventListener('install', e => {
    console.log('[Service Worker] Installed');
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('[Service Worker] Caching Static Assets');
            return cache.addAll(staticAssets);
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
            if (cacheName.includes(key)) {
                return caches.delete(key);
            }
        }));
      })
    );
  });

self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then(r => {
            console.log(`[Service Worker] Fetching asset: ${e.request.url}`);
            return r ||
            fetch(e.request).then(response => {
                return caches.open(cacheName).then(cache => {
                    console.log('[Service Worker] Caching new asset: '+e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
      })
    );
  });

