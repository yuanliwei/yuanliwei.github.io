const VERSION = 1

const cacheName = `asset-cache:${VERSION}`

caches.keys().then((names) => {
    names.filter((name) => name != cacheName).forEach((name) => {
        caches.delete(name)
    })
})

self.addEventListener('fetch', (event) => {
    const request = event.request
    event.respondWith(new Promise((resolve, reject) => {
        if(request.url.endsWith('/cache.js')){
            resolve(fetch(request))
            return
        }
        caches.open(cacheName).then(async (cache) => {
            let response = await cache.match(request)
            if (response) {
                resolve(response)
                try {
                    response = await fetch(request)
                    cache.put(request, response)
                } catch (error) {
                    console.error(error)
                }
            } else {
                try {
                    response = await fetch(request)
                    await cache.put(request, response)
                    response = await cache.match(request)
                    resolve(response)
                } catch (error) {
                    reject(error)
                }
            }
        })
    }))
})