const express = require('express')
const app = express()
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI, {
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(_result => {
    console.log('connected to mongoDB')
  })
  .catch(error => {
    console.log('error connecting to mongodb, error message is: ', error.message)
  })

app.use(cors())
app.use(middleware.morgan())

/* routes */


app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app
