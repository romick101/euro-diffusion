class City {
    constructor (x, y, country) {
        this.x = x
        this.y = y
        this.country = Country
        this.coinsAmount = 1000000
        this.currentBallance = {}
        this.incomingBallance = {}
        this.outcomingBallance = {}
    }
    receiveIncome(countryName, amount) {
        this.incomingBallance[countryName]+=amount
    }
    incomeToCurrent(){
        Object.keys(this.incomingBallance).map(key => 
            this.currentBallance[key]+= this.incomingBallance[key]
        )
    }
    flushIncome(){
        Object.keys(this.incomingBallance).map(key =>
            this.incomingBallance[key] = 0
        )
    }
    countOutcome(){
        Object.keys(this.currentBallance).map(key => 
            this.outcomingBallance[key] = this.currentBallance[key]/1000
        ) 
    }
    pay(countryName){
        this.currentBallance[countryName]-=this.outcomingBallance[countryName]
        return this.outcomingBallance[countryName]
    }
}