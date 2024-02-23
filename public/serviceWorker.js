const CACHE_NAME = 'tea-v1';
const urlsToCache = [
  '/',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(res => {
    if (res) {
      return res;
    }
    return fetch(event.request);
  }))
})
