class SpotLight {

  constructor (scene) {
    var spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(-10, -10, 20)
    scene.add(spotLight)
  }

  update () {

  }

}

module.exports = SpotLight
