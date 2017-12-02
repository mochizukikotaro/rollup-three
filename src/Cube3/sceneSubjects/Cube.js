class Cube {

  constructor (scene) {
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00aaff })
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(cube)
  }

}

module.exports = Cube
