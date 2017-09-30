class World {
    constructor(scene) {
        this.objs = []
        this.scene = scene
    }

    update() {
        var temp = []
        this.objs.forEach((obj) => {
            obj.update()
            if(obj.live()){
                temp.push(obj)
            }
        })
        this.objs = temp
    }

    add(x, y, z) {
        this.objs.push(new Fireworks(this.scene, x, y, z))
    }
}

World.gravity = -0.01