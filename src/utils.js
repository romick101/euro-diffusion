const minCoordinate = 0
const maxCoordinate = 9

function isInBounds (coordinate) {
    return coordinate >= minCoordinate && coordinate <= maxCoordinate
}

function areInBounds(x, y) {
    return isInBounds(x) && isInBounds(y)
}

function findCityByCoordinates (cities, x, y) {
    return cities.find(({x: toFindX, y: toFindY}) => toFindX === x && toFindY === y )
}

module.exports = {
    isInBounds,
    areInBounds,
    findCityByCoordinates
}