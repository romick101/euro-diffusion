const map = require('./Map')
const fs = require('fs')
const Country = require('./Country')
const City = require('./City')
const Map = require('./Map')

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

function areParamsValid (params) {
    // todo checking
    return true
}

function processSingleCase(stream, countriesNumber) {
    const map = new Map()
    for(i=0; i<countriesNumber; i++) {
        const name = getCountryName(stream)
        const params = getCountryParams(stream)
        console.log(`got country ${name}:(${params})`)
        if(!areParamsValid(params)) 
            throw new Error(`Wrong params for  #${name}`)
        map.addCountry(new Country(name,
            new City (params[0], params[1]), 
            new City (params[2], params[3])))      
      }
    return map.getDiffusionResult()
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