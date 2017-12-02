
const Cube1 = require('./Cube1')

function init () {
  const sample = new Cube1()

  function animate() {
      requestAnimationFrame(animate);
      sample.render()
  }
  animate();
}

window.onload = init
