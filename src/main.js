const queryString = require('query-string')

const Top = require('./Top')
const Cube1 = require('./01_cube/main.js')
const Cube2 = require('./02_cube/main.js')
const Cube3 = require('./03_cube/main.js')
const Cube4 = require('./04_cube/main.js')
const Cube5 = require('./05_cube/main.js')
const AddCube6 = require('./06_add_cube/main.js')
const ThrowCube7 = require('./07_throw_cube/main.js')

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
      var inst = new Cube4(); break
    case '5':
      var inst = new Cube5(); break
    case '6':
      var inst = new AddCube6(); break
    case '7':
      var inst = new ThrowCube7(); break
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
