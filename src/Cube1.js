class Cube1 {

  constructor () {
    this.scene = new THREE.Scene()

    var w = window.innerWidth
    var h = window.innerHeight

    // camera
    this.camera = new THREE.PerspectiveCamera(
      45, w / h, 1, 1000
    )
    this.camera.position.set(-10, 10, 20)
    this.camera.lookAt(this.scene.position)
    this.scene.add(this.camera)

    // orbit controls
    var OrbitControls = require('three-orbit-controls')(THREE)
    var controls = new OrbitControls(this.camera)

    // renderer
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setClearColor(new THREE.Color(0xdddddd))
    this.renderer.setSize(w, h)

    // axes
    var axes = new THREE.AxesHelper(20)
    this.scene.add(axes)

    // spot light
    var spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(-10, 15, 5)
    this.scene.add(spotLight)

    // cube
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff00aa })
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    this.scene.add(cube)

    document.getElementById('webgl').appendChild(this.renderer.domElement)
  }

  render () {
    this.renderer.render(this.scene, this.camera);
  }
}

module.exports = Cube1
