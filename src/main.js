const queryString = require('query-string')

const Top = require('./Top')
const Cube1 = require('./Cube1')
const Cube2 = require('./Cube2/main.js')
const Cube3 = require('./Cube3/main.js')
const CubeYellow = require('./CubeYellow/main.js')

function init () {

  const id = queryString.parse(location.search)['id'];

  switch (id) {
    case '1':
      var inst = new Cube1(); break
    case '2':
      var inst = new Cube2(); break
    case '3':
      var inst = new Cube3(); break
    case '4':
      var inst = new CubeYellow(); break
    default:
      var inst = new Top()
      break
  }

  function animate() {
      requestAnimationFrame(animate);
      inst.update()
  }
  animate();
}

window.onload = init
