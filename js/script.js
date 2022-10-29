// Init scene & camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(2, 1, 5);

// Init renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Cube Object
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0xFFFFFF } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(1, 1, 1);
scene.add( cube );

// Cube 2 Object
const cube2 = new THREE.Mesh( geometry, material );
cube2.position.set(0, 3, 1);
scene.add(cube2);

// Sphere Object
var mysphere = new THREE.SphereGeometry(1, 32, 32);
var color = new THREE.Color('#ee7800');
var hex = color.getHex;
var sphereMaterial = new THREE.MeshLambertMaterial( { color: hex } );
var sphere = new THREE.Mesh(mysphere, sphereMaterial);
sphere.position.set(5, 1, 1);
scene.add( sphere );

// Ambient Light
// const light = new THREE.AmbientLight(0xFFFFFF, 1);
// scene.add( light );

// HemisphereLight
// const skyColor = 0x0000FF;  // blue
// const groundColor = 0xFF0000;  // red
// const light = new THREE.HemisphereLight(skyColor, groundColor, 1);
// scene.add( light );

// DirectionalLight
// const color = 0xFF0080;
// const intensity = 1;
// const light = new THREE.DirectionalLight(color, intensity);
// light.position.set(0, 5, 0);
// light.target.position.set(-5, 0, 0);
// scene.add( light );
// scene.add(light.target);

// PointLight
// const color = 0xFFFFFF;
// const intensity = 1;
// const light = new THREE.PointLight(color, intensity);
// light.position.set(-5, 0, 0);
// scene.add( light );

// SpotLight
const light = new THREE.SpotLight(0xFFFFFF, 1, 0, 1);
light.position.set(0, 5, 0);
light.target.position.set(0, -5, 0);
scene.add(light);
scene.add(light.target);

// Background Color
// renderer.setClearColor ( 0xffffff )

// Render
renderer.render( scene, camera );

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    cube2.rotation.x += 0.01;
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();