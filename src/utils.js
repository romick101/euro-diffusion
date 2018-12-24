const minCoordinate = 0
const maxCoordinate = 9

function areInBounds (coordinate) {
    return coordinate >= minCoordinate && coordinate <= maxCoordinate
}

function findCityByCoordinates (cities, x, y) {
    return cities.find(({x: toFindX, y: toFindY}) => toFindX === x && toFindY === y )
}

module.exports = {
    areInBounds,
    findCityByCoordinates
}