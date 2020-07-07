const morgan = require('morgan')

morgan.token('body', (req, res) => {
  return JSON.stringify(req.body)
})

morgan(':method :url :status :res[content-length] - :response-time ms :body')

const unknownEndpoint = (req, res) => {
  res.status.send({error: 'unknownEndpoint'})
}

const errorHandler = (error, req, res, next) => {
  if (error.name === 'CastError') {
    res.status(400).send({error: 'malformatted id'})
  } else if (error.name === 'ValidationError') {
    res.status(400).json({error: error.message})
  }

  console.log(error.message)

  next()
}

module.exports = {
  morgan,
  errorHandler,
  unknownEndpoint
}
