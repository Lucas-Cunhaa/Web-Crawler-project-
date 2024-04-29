const express = require('express')
const app = express()
const routes = require('./routes.js')

app.use(express.json())
app.use(routes)

app.listen('launch-wizard-1', () => { 
    console.log('Executed on 3090 door')
})