class City { 
    Name
    Region
    Country 
    TempCelsius
    TempFahrenheit
    Condition
    Humidity
    LastUpdate
    constructor(name, region, country, tempCelsius, tempFahrenheit, condition, humidity, lastUpdate) {
        this.Name = name 
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