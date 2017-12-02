var cube
let controls
class Cube {

  constructor (scene, gui) {

    controls = new function () {
      this.rotationSpeed = 0.02
    }

    gui.add(controls, 'rotationSpeed', 0, 0.5)


    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 })
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(cube)
  }

  update () {
    cube.rotation.x += controls.rotationSpeed
    cube.rotation.y += 0.02
    cube.rotation.z += 0.06
  }
}

module.exports = Cube
