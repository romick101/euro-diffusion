const map = require('./Map')
const fs = require('fs')

function compareChunkToString(chunk, string) {
    return Buffer.compare(chunk, Buffer.from(string)) === 0 ? true : false
}

function getCountryParams (stream) {
    const params = []
    while (null !== (chunk = stream.read(1))) {
        if (compareChunkToString(chunk, ' '))
            continue
        if (compareChunkToString(chunk, '\r'))
            continue
        if (compareChunkToString(chunk, '\n'))
            break
        if(Number.isInteger(+chunk))
            params.push(chunk)
      }
    return params
}

function getCountryName (stream) {
    let name = ''
    while (null !== (chunk = stream.read(1))) {
        if (compareChunkToString(chunk, '\r'))
            continue
        if (compareChunkToString(chunk, '\n'))
            continue
        if (compareChunkToString(chunk, ' '))
            break
        name = name.concat(chunk.toString())
      }
    return name
}

function processSingleCase(stream, countriesNumber) {
    for(i=0; i<countriesNumber; i++) {
        const name = getCountryName(stream)
        const params = getCountryParams(stream)
        console.log(`got country ${name}:(${params})`)
      }
}
function processStream (stream) {
    stream.on('readable', () => {
        let chunk;
        while (null !== (chunk = stream.read(1))) {
          processSingleCase(stream, Number(chunk))
        }
      })
}
function getOutput (inputPath) {
    const readStream = fs.createReadStream(inputPath)
    return processStream(readStream)
}

module.exports = getOutput