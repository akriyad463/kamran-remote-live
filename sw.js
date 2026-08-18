// Service Worker for Kamran Remote Live
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Required for PWA installation
  e.respondWith(fetch(e.request));
});
