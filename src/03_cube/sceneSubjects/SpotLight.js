class SpotLight {

  constructor (scene) {
    var spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(-10, 15, 5)
    scene.add(spotLight)
  }

}

module.exports = SpotLight
