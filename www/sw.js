/**
 * Class 10 AI Guru - Progressive Web App Service Worker
 * Enables offline caching, fast boot, and native WebAPK installation on Android.
 */

const CACHE_NAME = 'class10-aiguru-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './src/app.js',
  './src/auth/auth-manager.js',
  './src/ai/ai-guru.js',
  './src/data/chapters.js',
  './src/data/notes.js',
  './src/data/pyq-vault.js',
  './src/data/mindmaps.js',
  './src/data/dpp.js',
  './src/data/sample-papers.js',
  './src/data/sketchnotes.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
