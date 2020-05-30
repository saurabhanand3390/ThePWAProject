const staticCacheName = 'site_static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];
//Installing service worker
self.addEventListener('install', evt => {
    console.log('Service worker has been installed')
    // evt.waitUntil is used to force browser to wait till every thingh is added
    evt.waitUntil(caches.open(staticCacheName).then(cache => {
        // cache.add();
        console.log('Caching all things does not get change and are static')
        cache.addAll(assets)
    }))
})
//Activate service worker
self.addEventListener('activate', evt => {
    console.log('Service worker has been activated')
})
//Fetch
self.addEventListener('fetch', evt => {
    console.log('Fetch event', evt)
})