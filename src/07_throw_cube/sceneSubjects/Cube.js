class Cube {

  constructor (scene) {
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 })
    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(this.cube)
  }

  update () {
    this.cube.position.x += 0.1
    this.cube.position.y += 0.1
  }
}

module.exports = Cube
