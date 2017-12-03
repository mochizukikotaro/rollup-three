var cube
let controls

class Cube {

  constructor (scene, gui) {
    controls = new function () {
      this.rotationSpeed = 0.02

      this.addCube = () => {
        var cubeSize = Math.ceil((Math.random() * 3));
        var cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;
        cube.name = "cube-" + scene.children.length;
        // position the cube randomly in the scene
        cube.position.x = -30 + Math.round((Math.random() * 100));
        cube.position.y = Math.round((Math.random() * 5));
        cube.position.z = -20 + Math.round((Math.random() * 20));
        // add the cube to the scene
        scene.add(cube);
        this.numberOfObjects = scene.children.length;
      }
    }

    gui.add(controls, 'rotationSpeed', 0, 0.5)
    gui.add(controls, 'addCube')


    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xbbffff })
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(cube)
  }

  update () {
    cube.rotation.x += controls.rotationSpeed
    cube.rotation.y += 0.00
    cube.rotation.z += 0.001
  }
}

module.exports = Cube
