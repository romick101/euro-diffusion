const findCityByCoordinates = require('./utils').findCityByCoordinates

class City {
    constructor (x, y) {
        this.x = x
        this.y = y
        this.initialAmount = 1000000
        this.currentBalance = {}
        this.incomingBalance = {}
        this.outcomingBalance = {}
        this.neighbours = []
    }
    receiveIncome (countryName, amount) {
        this.incomingBalance[countryName]+=amount
    }
    incomeToCurrent () {
        Object.keys(this.incomingBalance).map(key => 
            this.currentBalance[key]+= this.incomingBalance[key]
        )
    }
    flushIncome () {
        Object.keys(this.incomingBalance).map(key =>
            this.incomingBalance[key] = 0
        )
    }
    setBalances (countries) {
        countries.map(({ name }) => {
            if (this.country.name === name)
                this.currentBalance[name] = this.inititalAmount
            else 
                this.currentBalance[name] = 0
            this.incomingBalance[name] = 0
            this.outcomingBalance[name] = 0
        })
    }
    countOutcome () {
        Object.keys(this.currentBalance).map(key => 
            this.outcomingBalance[key] = this.currentBalance[key]/1000
        ) 
    }
    pay (countryName) {
        this.currentBalance[countryName]-=this.outcomingBalance[countryName]
        return this.outcomingBalance[countryName]
    }
    addNeighbour(city) {
        if(findCityByCoordinates(this.neighbours, city.x, city.y) !== undefined)
            this.neighbours.push(city)
    }
}

module.exports = City