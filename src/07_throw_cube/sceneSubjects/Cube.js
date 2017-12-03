class Cube {

  constructor (scene) {
    this.scene = scene
    var cubeGeometry = new THREE.BoxGeometry(2, 2, 2)
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 })
    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    this.cube.position.set(-20, 0, 0)
    scene.add(this.cube)
    this.step = 0.1
  }

  get positionY () {
    return this.cube.position.y
  }

  get positionZ () {
    return this.cube.position.z
  }

  update () {
    this.cube.position.x += 0.2
    this.cube.position.y = (400 - Math.pow(this.cube.position.x, 2)) / 20
    if (this.cube.position.y < -2) {
      this.scene.remove(this.cube)
    }
  }
}

module.exports = Cube
