const VERSION = 5

const cacheName = `asset-cache:${VERSION}`

caches.keys().then((names) => {
    names.filter((name) => name != cacheName).forEach((name) => {
        caches.delete(name)
    })
})

self.addEventListener('fetch', (event) => {
    const request = event.request
    event.respondWith(new Promise((resolve, reject) => {
        if (request.url.endsWith('/cache.js')) {
            resolve(fetch(request))
            return
        }
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
    }))
})