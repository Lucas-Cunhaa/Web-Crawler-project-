class City { 
    City
    Region
    Country 
    TempCelsius
    TempFahrenheit
    Condition
    Humidity
    LastUpdate
    constructor(city, region, country, tempCelsius, tempFahrenheit, condition, humidity, lastUpdate) {
        this.City = city
        this.Region = region 
        this.Country = country 
        this.TempCelsius = tempCelsius
        this.TempFahrenheit =tempFahrenheit
        this.Condition = condition 
        this.Humidity = humidity 
        this.LastUpdate = lastUpdate
    }
}

module.exports = City