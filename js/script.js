const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(2, 1, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0xFFFFFF } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(1, 1, 1);
scene.add( cube );

// // Ambient Light
const light = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add( light );

// // HemisphereLight
// const skyColor = 0x0000FF;  // blue
// const groundColor = 0xFF0000;  // red
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
// light.position.set(0, 5, 0);
// scene.add( light );

// SpotLight
// const color = 0x000000;
// const intensity = 1;
// const light = new THREE.SpotLight(color, intensity);
// light.position.set(0, 10, 0);
// scene.add(light);
// scene.add(light.target);


// renderer.setClearColor ( 0xffffff )

renderer.render( scene, camera );


















// function animate() {
//     requestAnimationFrame( animate );
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     cube.rotation.z += 0.01;
//     renderer.render( scene, camera );
// }
// animate();