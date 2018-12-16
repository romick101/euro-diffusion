const getOutput = require('./src/index')
getOutput('./data/dataset1').then(res => {
   console.log(`res: ${res}`)
})