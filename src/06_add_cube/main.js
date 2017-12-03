let renderer
let scene
let camera
let sceneSubjects
let gui

const Cube = require('./sceneSubjects/Cube')
const SpotLight = require('./sceneSubjects/SpotLight')
const Axes = require('./sceneSubjects/Axes')


class Cubes06 {

  constructor () {
    var w = window.innerWidth
    var h = window.innerHeight
    scene = new THREE.Scene()

    gui = new dat.GUI()

    // camera
    camera = new THREE.PerspectiveCamera(
      45, w / h, 1, 1000
    )
    camera.position.set(-20, 20, 40)
    camera.lookAt(scene.position)
    scene.add(camera)

    // renderer
    renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(new THREE.Color(0xdddddd))
    renderer.setSize(w, h)

    // orbit controls
    var OrbitControls = require('three-orbit-controls')(THREE)
    var controls = new OrbitControls(camera, renderer.domElement)

    sceneSubjects = this._createSceneSubjects(scene)

    document.getElementById('webgl').appendChild(renderer.domElement)
  }

  update () {
    sceneSubjects.forEach((e, i, a) => {
      e.update()
    })
    renderer.render(scene, camera);
  }

  _createSceneSubjects (scene) {
    const sceneSubjects = [
        new Axes(scene),
        new SpotLight(scene),
        new Cube(scene, gui)
    ]
    return sceneSubjects;
  }

}

module.exports = Cubes06
