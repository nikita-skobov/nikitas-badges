module.exports = {
  name: 'build-status',
  fn: (cliObj) => {
    const retObj = {
      text: ['build', 'failing'],
      colorB: '#e05d44',
      colorA: '#555',
    }
    if (cliObj['build-status'] && cliObj['build-status'] === 'SUCCESS') {
      retObj.text[1] = 'passing'
      retObj.colorB = '#4c1'
    }

    return retObj
  },
}
