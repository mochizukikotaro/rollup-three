let renderer
let scene
let camera

const Cube = require('./sceneSubjects/Cube')
const SpotLight = require('./sceneSubjects/SpotLight')
const Axes = require('./sceneSubjects/Axes')


class Cube2 {

  constructor () {
    var w = window.innerWidth
    var h = window.innerHeight
    scene = new THREE.Scene()

    // camera
    camera = new THREE.PerspectiveCamera(
      45, w / h, 1, 1000
    )
    camera.position.set(-10, 10, 20)
    camera.lookAt(scene.position)
    scene.add(camera)

    // orbit controls
    var OrbitControls = require('three-orbit-controls')(THREE)
    var controls = new OrbitControls(camera)

    // renderer
    renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(new THREE.Color(0xdddddd))
    renderer.setSize(w, h)

    this._createSceneSubjects(scene)

    document.getElementById('webgl').appendChild(renderer.domElement)
  }

  render () {
    renderer.render(scene, camera);
  }

  _createSceneSubjects (scene) {
    const sceneSubjects = [
        new Axes(scene),
        new SpotLight(scene),
        new Cube(scene)
    ]
    return sceneSubjects;
  }

}

module.exports = Cube2
