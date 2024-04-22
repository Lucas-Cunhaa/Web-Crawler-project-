const City = require('./City.js')
const key = "392fb93edf45408a876121141242204"
const mongoDB = require('../models/mongoDb.js')

exports.getWeather = async (req, res) => {
   console.log('GET WEATHER')
   const city = req.params.city
   const checkByCity = await mongoDB.getByCity(city)
   if (checkByCity.length < 1) {
      await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`, {
         method: 'GET',
      }).then( response => {
         return response.json()
      })
      .then(data => {
         console.log(data)
         res.status(200).send(data)
      })
      .catch(error => {
         console.error("ERROR IN GET WEATHER INFOS:", error);
         res.status(500).send("ERROR IN GET WEATHER INFOS");
      });
   } else {
      res.status(200).send(checkByCity)
   }
}
exports.insertWheater = async (req, res) =>  {
   const city = req.params.city

   await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`, {
      method: 'GET',
   }).then(response => {
      return response.json()
   })
   .then(data => {
      const location = data.location 
      const current = data.current 
      const newCity = new City( location.name, location.region,location.country, current.temp_c, current.temp_f, current.condition.text, data.humidity, current.last_updated )
      mongoDB.insertWeatherInfo(newCity)
      res.status(200).send(data)
   })
   .catch(error => {
      console.error("ERROR IN GET WEATHER INFOS:", error);
      res.status(500).send("ERROR IN GET WEATHER INFOS");
   });
}