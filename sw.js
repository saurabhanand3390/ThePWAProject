//Installing service worker
self.addEventListener('install', evt => {
    console.log('Service worker has been installed')
})
//Activate service worker
self.addEventListener('activate', evt => {
    console.log('Service worker has been activated')
})
//Fetch
self.addEventListener('fetch', evt => {
    console.log('Fetch event', evt)
})