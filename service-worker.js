const CACHE_NAME = 'v1';
const URLS_TO_CACHE = [
  'https://script.google.com/macros/s/AKfycbyPEsGBejD4YkZBue-YbWl5fCY6MbOes3DlYmp9LoYMZz5AfDEd2ByQdfFvD4-bwpCt9A/exec',
  'https://Sushi0998.github.io/Webapp/manifest.json',
  'https://Sushi0998.github.io/Webapp/service-worker.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
