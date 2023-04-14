import './style.css';
import * as THREE from 'three';

//* Container that holds objects, cameras and lights 
const scene = new THREE.Scene();

//* Camera arguments: 1st - FOV, 2nd - Aspect ratio, 3rd - View Frustum 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);