class Top {
  constructor () {

    const works = [
      {id: 1, description: 'Pink cube'},
      {id: 2, description: 'Green cube'}
    ]

    const webgl = document.getElementById('webgl')

    webgl.setAttribute('style', 'margin: 40px')

    works.forEach((e, i, a) => {
      let aTag = document.createElement('a')
      aTag.setAttribute('href', '/?id=' + e['id'])
      aTag.setAttribute('style', 'display: block')
      aTag.innerHTML = e['description']
      webgl.appendChild(aTag)
    })

  }
  render () {
    // Nothing to do
  }
}

module.exports = Top
