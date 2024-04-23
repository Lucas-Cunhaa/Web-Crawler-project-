const Prevision = require('./Prevision.js')
const key = "392fb93edf45408a876121141242204"
const mongoDB = require('../models/mongoDb.js')

async function getPrevisionByCity (city){
   let newCity;
   try{
      await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`, {
         method: 'GET',
      }).then( response => {
         console.log("GETTING DATAS FROM WEATHER API")
         return response.json()
      })
      .then(async data => {
         console.log(data)
         const location = data.location 
         const current = data.current 
         const date = location.localtime.slice(0, 10)
         newCity = new Prevision( location.name, location.region,location.country, current.temp_c, current.temp_f,
         current.condition.text, date, current.last_updated )

         console.log(newCity)

         await mongoDB.insertWeatherInfo(newCity)
         return newCity
      })
      .catch(error => {
         console.error("ERROR IN GET WEATHER INFOS:", error);
         res.status(500).send("ERROR IN GET WEATHER INFOS");
      });
   }  catch(error){
      console.error("ERROR IN GET DATA FROM WHEATHER API", error)
   }
   return newCity
}

exports.getWeather = async (req, res) => {
   try{
      console.log('GET WEATHER')
      const city = req.query.city
      console.log(city)

      const weatherByCity = await mongoDB.getByCity(city)

      if (weatherByCity.length < 1) {
         const myPrevision = await getPrevisionByCity(city)
         res.status(200).send(myPrevision)
      } else {
         res.status(200).send(weatherByCity.map(element => {return element}))
      }
   } catch (error) {
   console.error("ERROR IN GET WHEATHER API", error)
   }
} 
exports.insertWheater = async (req, res) =>  {
   const city = req.params.city
   console.log('POST API')
   try{
      const myPrevision = await getPrevisionByCity(city)
      res.status(200).send(myPrevision)
   } catch(error) {
      console.error("ERROR IN INSERT WHEATHER API", error)
   }
}

exports.getWeatherByDate = async (req, res) => {
   console.log('getWeather from DATES')
   const city = req.query.city
   const startDate = req.query.startDate 
   const endDate = req.query.endDate
   try{
      const weatherByDays =  await mongoDB.getByCityAndStarDayAndEndDay(city, startDate, endDate)
      if(weatherByDays.length < 1) {

         const weatherByCity = await mongoDB.getByCity(city)
         if(weatherByCity.length < 1) {
            const myWeather = await getPrevisionByCity(city)
            res.status(200).send(myWeather)
         } else {
            res.status(200).send(weatherByCity)
         }
         
      } else {
         res.status(200).send(weatherByDays)
      }
   } catch(error) {
      console.error("ERROR IN GET BY DATE API", error)
   }


}