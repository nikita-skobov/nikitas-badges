module.exports = {
  name: 'build-status',
  fn: (cliObj) => {
    const retObj = {
      text: ['build', 'failing'],
      colorB: 'red',
    }
    if (cliObj['build-status'] && cliObj['build-status'] === 'SUCCESS') {
      retObj.text[1] = 'passing'
      retObj.colorB = 'brightgreen'
    }

    return retObj
  },
}
