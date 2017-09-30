class ShaderProgram {
    static vertex() {
        return `

            uniform float time;
        
            attribute float life;
            attribute float speed;
            attribute vec3 direction;
            attribute vec3 customColor;

            varying vec3 vColor;

            void main() {
                float scale = 100.0;
                float size = 10.0;
                vColor = customColor;
                if(life < time) {
                    vColor = vec3(0,0,0);
                }
                // vColor = vec3(0,0,0) / time * 1000;
                vec3 pos = speed * time * direction + position;
                pos.y = pos.y + 0.5 * -0.18 * time * time;
                vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );
                // gl_PointSize = size;
                gl_PointSize = size * ( scale / - mvPosition.z );
                gl_Position = projectionMatrix * mvPosition;
            }
        `
    }

    static fragment() {
        return `
        uniform sampler2D texture;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4( vColor, 1.0 );
            gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );
        }
        `
    }
}
