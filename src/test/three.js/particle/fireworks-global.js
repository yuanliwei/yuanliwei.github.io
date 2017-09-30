var container, stats;

var camera, renderer;
var cameraHelper, cameraGlobal;

var world;

init();
animate()

function init() {
    container = document.createElement('div')
    document.body.appendChild(container)

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000)
    camera.position.x = 0
    camera.position.z = 500
    camera.position.y = -500


    var controls = new THREE.OrbitControls(camera)

    var scene = new THREE.Scene()

    renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    container.appendChild(renderer.domElement)

    stats = new Stats()
    container.appendChild(stats.dom)

    window.addEventListener('resize', onWindowResize, false)

    var geometry = new THREE.BoxGeometry(10, 10, 10)
    // var material = new THREE.MeshBasicMaterial({color: 0x00ff00})
    var material = new THREE.MeshNormalMaterial({ color: 0x00ff00 })
    var cube = new THREE.Mesh(geometry, material)

    cube.position.y = -300

    scene.add(cube)



    // scene.remove(cube)

    world = new World(scene)

    window.addEventListener('keydown', () => {
        world.add(0, -300, 0)
    })

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
    requestAnimationFrame(animate)

    render()
    stats.update()
    world.update()
}

function render() {
    renderer.render(world.scene, camera)
}

function generateId() {
    if (!window.globalId) window.globalId = 1;
    return window.globalId++
}