const queryString = require('query-string')

const Cube1 = require('./Cube1')
const Cube2 = require('./Cube2')

function init () {

  const id = queryString.parse(location.search)['id'];

  switch (id) {
    case '2':
      var inst = new Cube2()
      break
    default:
      var inst = new Cube1()
      break
  }

  function animate() {
      requestAnimationFrame(animate);
      inst.render()
  }
  animate();
}

window.onload = init
