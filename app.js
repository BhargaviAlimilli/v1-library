const express=require('express')
const bookRoutes= require('./routes/routes')
const app= express()
app.use(express.json())
app.use('/v1/library',bookRoutes)  // route for library 

module.exports= app



