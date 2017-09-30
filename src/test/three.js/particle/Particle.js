class Particle {
    constructor(scene, x, y, z, hueG) {
        this.scene = scene
        this.x = x
        this.y = y
        this.z = z

        this.position = new THREE.Vector3(this.x, this.y, this.z)
        this.direction = new THREE.Vector3(Math.random(), Math.random(), Math.random()).subScalar(0.5).normalize()
        this.speed = Math.random() * 1
        this.life = Math.random() * 60 * 3 + 60 * 3 // 5s + (0 - 3)s
        this.time = 0;

        var particleGeometry = new THREE.Geometry();

        particleGeometry.vertices.push(new THREE.Vector3())

        this.hueG = hueG;
        this.hue = this.random( this.hueG - 50, this.hueG + 50 )
        this.brightness = this.random( 50, 80 )
        var color = new THREE.Color('hsl(' + parseInt(this.hue) + ', 100%, ' + parseInt(this.brightness) + '%)')
        var particleMaterial = new THREE.PointsMaterial({ color: color });

        this.mesh = new THREE.Points(particleGeometry, particleMaterial)

        this.mesh.position.copy(this.position)

        this.scene.add(this.mesh)
    }

    update() {
        this.time++
        var pos = this.countPos(this.position.clone(), this.speed, this.direction.clone(), this.time)
        this.mesh.position.copy(pos)
    }

    live(){
        if(this.time > this.life){
            this.scene.remove(this.mesh)
            return false            
        }
        return true
    }

    countPos(startPos, speed, direction, time) {
        direction.multiplyScalar(speed * time).y += 1 / 2 * World.gravity * time * time
        startPos.add(direction)
        return startPos
    }

    random( min, max ) {
        return Math.random() * ( max - min ) + min;
      }
  
}