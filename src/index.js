const map = require('./Map')

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
        if (compareChunkToString(chunk, ' '))
            break
        name = name.concat(chunk.toString())
      }
    return name
}
function processFile (path) {
    const fs = require('fs'),
    readStream = fs.createReadStream(path);
    readStream.on('readable', () => {
        let chunk;
        while (null !== (chunk = readStream.read(1))) {
          console.log(`${chunk}`);
          for(i=0; i<Number(chunk); i++) {
            const name = getCountryName(readStream);
            const params = getCountryParams(readStream);
            console.log(`got country ${name}:(${params})`);
          }
        }
      });
}
function getOutput (inputPath) {
    return processFile(inputPath)
}

module.exports = getOutput