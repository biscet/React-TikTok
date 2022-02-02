const { EnvironmentPlugin } = require('webpack')

const environmentData = (dev) => {
  return [new EnvironmentPlugin([])]
}

module.exports = environmentData
