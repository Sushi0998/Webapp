const CACHE_NAME = 'v1';
const URLS_TO_CACHE = [
  'https://script.google.com/macros/s/AKfycbyPEsGBejD4YkZBue-YbWl5fCY6MbOes3DlYmp9LoYMZz5AfDEd2ByQdfFvD4-bwpCt9A/exec',
  'https://drive.google.com/uc?export=download&id=1-nWXc-wmxxsogx-UuGB83k0lVxT0YmeS',
  'https://drive.google.com/uc?export=download&id=1PjOEs1k1N2XuGGfkPOQIyBqi_pY-SlhO'
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
