class Map {
    constructor() {
        this.cities = []
        this.countries = []
    }

    performTransaction(from, to, countryName) {
        to.receiveIncome(countryName, from.pay(countryName))
    }
    initializeIncomes() {
        this.cities.map(city => city.setBalances(this.countries))
    }
}

module.exports = Map