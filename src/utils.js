function isValidCoordinate (coordinate) {
    return coordinate >= minCoordinate && coordinate <= maxCoordinate
}

function findCityByCoordinates (cities, x, y) {
    return this.cities.find(({x: toFindX, y: toFindY}) => 
        toFindX === x && toFindY === y )
}

module.exports = {
    isValidCoordinate,
    findCityByCoordinates
}