class Prevision { 
    City
    Region
    Country 
    TempCelsius
    TempFahrenheit
    Condition
    Date
    LastUpdate
    constructor(city, region, country, tempCelsius, tempFahrenheit, condition, date, lastUpdate) {
        this.City = city
        this.Region = region 
        this.Country = country 
        this.TempCelsius = tempCelsius
        this.TempFahrenheit =tempFahrenheit
        this.Condition = condition 
        this.Date = date
        this.LastUpdate = lastUpdate
    }
}

module.exports = Prevision