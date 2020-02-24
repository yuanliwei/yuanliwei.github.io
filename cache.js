const VERSION = 18

const cacheName = `asset-cache:${VERSION}`

caches.keys().then((names) => {
    names.filter((name) => name != cacheName).forEach((name) => {
        caches.delete(name)
    })
})

self.addEventListener('fetch', (event) => {
    const request = event.request
    event.respondWith(new Promise((resolve, reject) => {
        if (event.request.method != "GET") {
            resolve(fetch(request))
        } else if (!event.request.url.startsWith(location.origin)) {
            console.warn('no cached : ', event.request.url);
            resolve(fetch(request))
        } else if (request.url.endsWith('/cache.js')) {
            resolve(fetch(request))
        } else {
            caches.open(cacheName).then(async (cache) => {
                try {
                    let response = await cache.match(request)
                    if (!response) {
                        response = await fetch(request)
                    }
                    resolve(response)
                    cache.put(request, response.clone())
                } catch (error) {
                    console.error(error)
                    reject(error)
                }
            })
        }
    }))
})