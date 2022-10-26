const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(1, 1, 1);
scene.add( cube );


const light = new THREE.DirectionalLight(0xF0F0F0, 1);
light.position.set(0, -5, 0);
light.target.position.set(-5, 0, 0);
scene.add( light );
scene.add(light.target);

// Ambient Light
// const light = new THREE.AmbientLight(0xFFFFFF, 1);
// scene.add( light );

// HemisphereLight
// const skyColor = 0xB1E1FF;  // light blue
// const groundColor = 0xB97A20;  // brownish orange
// const light = new THREE.HemisphereLight(skyColor, groundColor, 1);
// scene.add( light );

// DirectionalLight
// const color = 0xFFFFFF;
// const intensity = 1;
// const light = new THREE.DirectionalLight(color, intensity);
// light.position.set(0, -5, 0);
// light.target.position.set(-5, 0, 0);
// scene.add( light );
// scene.add(light.target);

// PointLight
// const color = 0xFFFFFF;
// const intensity = 1;
// const light = new THREE.PointLight(color, intensity);
// light.position.set(0, 1, 0);
// scene.add( light );

// SpotLight
// const color = 0xFFFFFF;
// const intensity = 1;
// const light = new THREE.SpotLight(color, intensity);
// light.position.set(0, 10, 0);
// scene.add(light);
// scene.add(light.target);



function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();