class SpotLight {

  constructor (scene) {
    var spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(-20, 30, -5)
    scene.add(spotLight)
  }

  update () {

  }

}

module.exports = SpotLight
