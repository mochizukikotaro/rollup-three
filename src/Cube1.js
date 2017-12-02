class Cube1 {

  constructor () {
    var w = window.innerWidth
    var h = window.innerHeight
    var scene = new THREE.Scene()

    // camera
    var camera = new THREE.PerspectiveCamera(
      45, w / h, 1, 1000
    )
    camera.position.set(-10, 10, 20)
    camera.lookAt(scene.position)
    scene.add(camera)

    // orbit controls
    var OrbitControls = require('three-orbit-controls')(THREE)
    var controls = new OrbitControls(camera)

    // renderer
    var renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(new THREE.Color(0xdddddd))
    renderer.setSize(w, h)

    // axes
    var axes = new THREE.AxesHelper(20)
    scene.add(axes)

    // spot light
    var spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(-10, 15, 5)
    scene.add(spotLight)

    // cube
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff00aa })
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(cube)

    document.getElementById('webgl').appendChild(renderer.domElement)

    // この３つがプロパティ
    this.renderer = renderer
    this.scene = scene
    this.camera = camera
  }

  render () {
    this.renderer.render(this.scene, this.camera);
  }
}

module.exports = Cube1
