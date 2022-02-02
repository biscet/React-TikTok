module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        shippedProposals: false,
        loose: false
      }
    ],
    '@babel/react'
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-proposal-private-methods', { loose: false }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
    'babel-plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-optional-chaining',
    'transform-regenerator',
    '@emotion/babel-plugin'
  ]
}
