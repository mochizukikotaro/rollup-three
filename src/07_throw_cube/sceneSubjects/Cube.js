class Cube {

  constructor (scene) {
    this.scene = scene
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 })
    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(this.cube)
  }

  get positionY () {
    return this.cube.position.y
  }

  update () {
    this.cube.position.x += 0.1
    this.cube.position.y += 0.1
    if (this.cube.position.y > 20) {
      this.scene.remove(this.cube)
    }
  }
}

module.exports = Cube
