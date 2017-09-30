class Fireworks {
    constructor(scene, x, y, z) {
        this.scene = scene
        this.particles = []

        this.startPos = new THREE.Vector3(x, y, z)
        this.speed = this.random(3, 4)
        this.direction = new THREE.Vector3(Math.random(), Math.random() * 3 + 1, Math.random()).subScalar(0.5).normalize()
        this.time = 1

        this.step = 0

        this.hue = this.random(0, 360)
        this.brightness = this.random(50, 80)
        var color = new THREE.Color('hsl(' + parseInt(this.hue) + ', 100%, ' + parseInt(this.brightness) + '%)')

        var self = this
        var material = new THREE.SpriteMaterial( {
            map: self.generateSprite(),
            blending: THREE.AdditiveBlending,
            color: color
        } );
        this.mesh = new THREE.Sprite( material );

        this.mesh.position.copy(this.startPos)
        this.mesh.scale.addScalar(3)

        this.scene.add(this.mesh)

    }

    bomb(pos) {
        // for (var i = 0; i < 1000; i++) {
        //     this.particles.push(new Particle(this.scene, pos.x, pos.y, pos.z, this.hue))
        // }

        var geometry = new THREE.BoxGeometry(1, 1, 1, 20, 20, 20);

        geometry.center();

        var vertices = geometry.vertices;

        var buffergeometry = new THREE.BufferGeometry();

        // position
        var position = new THREE.Float32Attribute(vertices.length * 3, 3).copyVector3sArray(vertices);
        buffergeometry.addAttribute('position', position);

        // direction
        var direction = new THREE.Float32Attribute(vertices.length * 3, 3);
        buffergeometry.addAttribute('direction', direction);

        var dir = new THREE.Vector3()
        for (var i = 0; i < direction.count; i++) {
            dir.set(Math.random(), Math.random(), Math.random()).subScalar(0.5).normalize()
            dir.toArray(direction.array, i * direction.itemSize)
        }

        // color
        var customColor = new THREE.Float32Attribute(vertices.length * 3, 3);
        buffergeometry.addAttribute('customColor', customColor);

        var color = new THREE.Color(0xffffff);

        for (var i = 0, l = customColor.count; i < l; i++) {
            color.setHSL(this.random((this.hue - 50) / 360, (this.hue + 50) / 360), 1, this.random(0.5, 0.8));
            color.toArray(customColor.array, i * customColor.itemSize);
        }

        // life
        var life = new THREE.Float32Attribute(vertices.length, 1);
        buffergeometry.addAttribute('life', life);

        for (var i = 0; i < life.count; i++) {
            life.setX(i, this.random(5, 5 + i / 50))
        }

        // speed
        var speed = new THREE.Float32Attribute(vertices.length, 1);
        buffergeometry.addAttribute('speed', speed);

        for (var i = 0; i < speed.count; i++) {
            speed.setX(i, 1 + Math.random() * 5)
        }


        this.uniforms = {
            time: { value: 0 },
            texture: { value: this.generateSprite() }
        }

        var self = this

        var shaderMaterial = new THREE.ShaderMaterial({

            uniforms: self.uniforms,

            vertexShader: ShaderProgram.vertex(),
            fragmentShader: ShaderProgram.fragment(),

            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true,
            vertexColors: true

        });


        this.object = new THREE.Points(buffergeometry, shaderMaterial);
        this.object.position.copy(pos)
        this.scene.add(this.object);


    }

    update() {
        if (this.step == 0) {
            var start = this.countPos(this.startPos.clone(), this.speed, this.direction.clone(), this.time)
            this.time++
            // var end = this.countPos(this.startPos.clone(), this.speed, this.direction.clone(), this.time)

            this.mesh.position.copy(start)

            if (this.speed + World.gravity * this.time < 0) {
                this.scene.remove(this.mesh)
                this.step = 1
                this.bomb(start)
            }
        } else {
            this.uniforms.time.value += 0.2

            var time = Date.now() * 0.001;

            // this.object.rotation.y = 0.25 * time;

            if (this.uniforms.time.value > 50) {
                this.step = 2
            }

        }
    }

    live() {
        if (this.step == 2) {
            this.scene.remove(this.object)
        }
        return true
    }

    countPos(startPos, speed, direction, time) {
        direction.multiplyScalar(speed * time).y += 1 / 2 * World.gravity * time * time
        startPos.add(direction)
        return startPos
    }

    random(min, max) {
        return Math.random() * (max - min) + min;
    }

    generateSprite() {

        var canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;

        var context = canvas.getContext('2d');
        var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.4, 'rgba(255,255,255,1)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;

    }
}