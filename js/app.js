// 3D Background
const canvas = document.getElementById('bg3d');
if(canvas){
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
const geometry = new THREE.TorusKnotGeometry(10,3,100,16);
const material = new THREE.MeshBasicMaterial({color:0x8b5cf6, wireframe:true});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);
camera.position.z = 30;
function animate(){
requestAnimationFrame(animate);
torus.rotation.x += 0.01;
torus.rotation.y += 0.01;
renderer.render(scene,camera);
}
animate();
}

// Upload to Firebase Storage
function uploadBook(){
let file = document.getElementById("file").files[0];
let title = document.getElementById("title").value;
if(!file) return alert("اختر ملف PDF");
let storageRef = storage.ref("books/"+file.name);
storageRef.put(file).then(()=>alert("تم رفع الرواية بنجاح"));
}

