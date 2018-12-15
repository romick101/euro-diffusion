const { isValidCoordinate, findCityByCoordinates } = require('./utils')
const minCoordinate = 0
const maxCoordinate = 9

class Map {
    constructor() {
        this.cities = []
        this.countries = []
        this.neighbours = {}
        this.result = {}
    }

    init() {
        this.buildNeighbours()
        this.setInitialBalances()
    }

    buildNeighbours () {
        this.cities.map(({x, y}) => {
            if(westernCityExists(x, y)) 
                city.addNeighbour(findCityByCoordinates(x-1, y))
            if(easternCityExists(x, y)) 
                city.addNeighbour(findCityByCoordinates(x+1, y))
            if(northernCityExists(x, y)) 
                city.addNeighbour(findCityByCoordinates(x, y+1))
            if(southernCityExists(x, y)) 
                city.addNeighbour(findCityByCoordinates(x, y-1))
        })
    }

    westernCityExists (x, y) {
        return x != minCoordinate && grid[x-1][y] != 0
    }
    easternCityExists (x, y) {
        return x != minCoordinate && grid[x+1][y] != 0
    }
    northernCityExists (x, y) {
        return x != minCoordinate && grid[x][y+1] != 0
    }
    southernCityExists (x, y) {
        return x != minCoordinate && grid[x][y-1] != 0
    }

    setInitialBalances () {
        this.cities.map(city => city.setBalances(this.countries))
    }

    performTransaction (from, to, countryName) {
        to.receiveIncome(countryName, from.pay(countryName))
    }

    initializeIncomes () {
        this.cities.map(city => city.setBalances(this.countries))
    }

    toContinue (day) {
        this.countries.map(country => {
            if (country.judgmentDay < 0)
             country.judgmentDay = day
        })
        return this.cities.reduce((acc, city) => {
            if(!city.checkReadyStatus()) {
                city.country.judgmentDay = -1
                return acc && false
            }
        }, true)
    }

    performDiffusion () {
        this.init()
        let day = 1;
        while(!toContinue(day)) {
            morning()
            day()
            evening()
            day++;
        }
        return this.result
    }

    morning () {
        this.cities.map(city => city.countOutcome())
    }

    addCountry (country) {
        this.countries.push(country)
        for(y=country.yl; y <= country.yh; y++) {
            for(x=country.xl; x <= country.xh; x++)
            {
                this.cities.push(new City(x, y))
            }
        }
    }

    getDiffusionResult() {

    }
}

module.exports = Map