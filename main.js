import './style.css';
import * as THREE from 'three';

//* Container that holds objects, cameras and lights 
const scene = new THREE.Scene();

//* Camera arguments: 1st - FOV, 2nd - Aspect ratio, 3rd - View Frustum 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
//* Setting camera Z axis 
camera.position.setZ(30);



const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

function animate() {
  requestAnimationFrame(animate);
  
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  //* render === draw  
  renderer.render(scene, camera);
}

animate();