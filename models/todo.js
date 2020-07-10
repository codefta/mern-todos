const mongoose = require('mongoose')

const schema = mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
})

schema.pre('save', (next) => {
  const now = new Date()
  this.updatedAt = now

  if (!this.createdAt) {
    createdAt = now
  }

  next()
})

schema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Todo', schema)
