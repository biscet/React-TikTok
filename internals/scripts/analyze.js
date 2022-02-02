#!/usr/bin/env node

const shelljs = require('shelljs')
const chalk = require('chalk')
const animateProgress = require('./helpers/progress')
const addCheckMark = require('./helpers/checkmark')

const progress = animateProgress('Generating stats.json')

shelljs.exec(
  'npx webpack --config webpack.config.js --profile --json > stats.json',
  addCheckMark.bind(null, callback)
)

function callback() {
  clearInterval(progress)

  process.stdout.write(
    `\n\nOpen ${
      chalk.magenta('http://webpack.github.io/analyse/')
    }${chalk.blue('\n(in your browser and upload the stats.json file!)\n\n')}`
  )

  const stats = require('../../client/stats.json')
  process.stdout.write(
    `Time load webpack${
      chalk.blue(`${stats.time} ms\n`)}`
  )
}
