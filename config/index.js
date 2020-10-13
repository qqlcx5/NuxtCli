'use strict'
import defaultConfig from './default'

let customConfig = {}
try {
  customConfig = require('./custom')
} catch (e) {
  customConfig = {}
}

const config = { ...defaultConfig, ...customConfig }

// if (process.env.NODE_ENV !== 'production') {
//   console.log('ShareManBoxNuxt configuration')
//   console.table(config)
// }

export default config
