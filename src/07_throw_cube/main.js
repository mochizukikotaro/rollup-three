let renderer
let scene
let camera
let sceneSubjects
let gui
let controls

let cubes

const Cube = require('./sceneSubjects/Cube')
const SpotLight = require('./sceneSubjects/SpotLight')
const Axes = require('./sceneSubjects/Axes')


class Sample7 {

  constructor () {
    cubes = []
    controls = new function () {
      this.cameraX = 0
      this.cameraY = -50
      this.cameraZ = 100

      this.addCube = () => {
        var newCube = new Cube(scene)
        cubes.push(newCube)
        console.log(cubes);
      }
    }

    gui = new dat.GUI()
    gui.add(controls, 'cameraX', -300, 300)
    gui.add(controls, 'cameraY', -300, 300)
    gui.add(controls, 'cameraZ', -300, 300)
    gui.add(controls, 'addCube')


    var w = window.innerWidth
    var h = window.innerHeight
    scene = new THREE.Scene()

    // camera
    camera = new THREE.PerspectiveCamera(
      45, w / h, 1, 200
    )
    camera.position.set(
      controls.cameraX,
      controls.cameraY,
      controls.cameraZ
    )
    camera.lookAt(scene.position)
    scene.add(camera)


    // renderer
    renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(new THREE.Color(0xdddddd))
    renderer.setSize(w, h)


    // orbit controls
    // var OrbitControls = require('three-orbit-controls')(THREE)
    // controls = new OrbitControls(camera, renderer.domElement)


    sceneSubjects = this._createSceneSubjects(scene)

    document.getElementById('webgl').appendChild(renderer.domElement)
  }

  update () {
    camera.position.set(
      controls.cameraX,
      controls.cameraY,
      controls.cameraZ
    )
    camera.lookAt(scene.position)
    sceneSubjects.forEach((e, i, a) => {
      e.update()
    })
    cubes.forEach((e, i, a) => {
      e.update()

      // TODO: 遠くへいったら消すという処理をこれで賄っている...
      if (e.positionY > 20) {
        cubes.splice(i, 1)
        e = null
      }
    })

    renderer.render(scene, camera);
  }

  _createSceneSubjects (scene) {
    const sceneSubjects = [
        new Axes(scene),
        new SpotLight(scene)
    ]
    return sceneSubjects;
  }

}

module.exports =  Sample7
