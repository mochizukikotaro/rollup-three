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
const Plane = require('./sceneSubjects/Plane')


class Sample7 {

  constructor () {
    cubes = []
    controls = new function () {
      this.cameraX = -30
      this.cameraY = 40
      this.cameraZ = 30

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
      45, w / h, 1, 500
    )
    camera.position.set(
      controls.cameraX,
      controls.cameraY,
      controls.cameraZ
    )
    // camera.lookAt(scene.position)
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

    this._setEventHander()
  }

  _setEventHander () {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode == 32) {
        controls.addCube()
      }
    })
  }


  update () {
    camera.position.set(
      controls.cameraX,
      controls.cameraY,
      controls.cameraZ
    )
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    sceneSubjects.forEach((e, i, a) => {
      e.update()
    })
    cubes.forEach((e, i, a) => {
      e.update()

      // TODO: 下へいったら消すという処理をこれで賄っている...
      if (e.positionY < -2) {
        cubes.splice(i, 1)
        e = null
      }
    })

    renderer.render(scene, camera);
  }

  _createSceneSubjects (scene) {
    const sceneSubjects = [
        new Axes(scene),
        new SpotLight(scene),
        new Plane(scene)
    ]
    return sceneSubjects;
  }

}

function onResize () {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', onResize, false)

module.exports =  Sample7
