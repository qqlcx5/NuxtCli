'use strict'
import defaultConfig from './default'

let customConfig = {}
try {
    customConfig = require('./custom')
} catch (e) {
    customConfig = {}
}
const config = Object.assign(defaultConfig, customConfig)
// const config = { ...defaultConfig, ...customConfig }

// if (process.env.NODE_ENV !== 'production') {
//   console.table(config)
// }

export default config
