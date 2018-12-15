class Country {
    constructor (name, southWestCity, northEastCity) {
        this.name = name
        this.xl = southWestCity.x
        this.yl = southWestCity.y
        this.xh = northEastCity.x
        this.yh = northEastCity.y
        this.cities = [southWestCity, northEastCity]
    }
}

module.exports = Country