var cube
class Cube {

  constructor (scene) {
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 })
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(cube)
  }

  update () {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.02
    cube.rotation.z += 0.06
  }
}

module.exports = Cube
