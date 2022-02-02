const path = require('path')

const aliasData = {
  '@app': path.resolve(__dirname, '../src/app'),
  '@components': path.resolve(__dirname, '../src/app/components'),
  '@pages': path.resolve(__dirname, '../src/app/pages'),
  '@utils': path.resolve(__dirname, '../src/utils'),
  '@image': path.resolve(__dirname, '../src/app/static/image'),
  '@styles': path.resolve(__dirname, '../src/app/static/styles'),
  '@entities': path.resolve(__dirname, '../src/app/entities'),
  '@stories': path.resolve(__dirname, '../src/stories')
}

module.exports = aliasData
