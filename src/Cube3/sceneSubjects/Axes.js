class Axes {

  constructor (scene) {
    var axes = new THREE.AxesHelper(20)
    scene.add(axes)
  }

}

module.exports = Axes
