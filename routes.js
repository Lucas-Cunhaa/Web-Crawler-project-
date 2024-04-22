const express = require('express') 
const allControllers = require('./src/controllers/allControllers')
const route = express.Router() 

route.get('/weather', allControllers.getWeather )
route.post('/weather/:city', allControllers.insertWheater)


module.exports = route
