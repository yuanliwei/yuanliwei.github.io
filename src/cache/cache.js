const VERSION = 'AUTO-INCREASE-VERSION'

const cacheName = `asset-cache:${VERSION}`

caches.keys().then((names) => {
    names.filter((name) => name != cacheName).forEach((name) => {
        caches.delete(name)
    })
})

/** @type{Cache} */
let cache = null

self.addEventListener('fetch', (event) => {
    /** @type{RequestInfo} */
    const request = event.request
    event.respondWith((async () => {
        if (event.request.method != "GET") {
            return fetch(request)
        } else if (!event.request.url.startsWith(location.origin)) {
            // console.info('no cached : ', event.request.url);
            return fetch(request)
        } else if (request.url.endsWith('/cache.js')) {
            return fetch(request)
        } else {
            if (!cache) {
                cache = await caches.open(cacheName)
            }
            let response = await cache.match(request)
            if (!response) {
                response = await fetch(request)
                cache.put(request, response.clone())
            }
            return response
        }
    })())
})