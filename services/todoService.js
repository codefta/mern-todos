const Todo = require('../models/todo')

const getAll = async () => {
    const todos = await Todo.find({})

    console.log(todos)

    return todos.map(t => t.toJSON())
}

const getById = async (id) => {
    const todo = await Todo.findById(id)

    return todo.toJSON()
}

const create = async (obj) => {
    if (obj.content.length < 3 || !obj.content) {
        throw new Error('content is missing')
    }

    const todo = new Todo({
        content: obj.content,
        startTime: obj.time,
        endTime: obj.time
    })

    const todoSaved = await todo.save()

    return todoSaved.toJSON()
}

const update = async (obj, id) => {
    const todoUpdated = await Todo.findByIdAndUpdate(id, obj, {
        new: true
    })

    return todoUpdated.toJSON()
}

const removeAll = async () => {
    const todosCleared = await Todo.deleteMany({})

    return todosCleared
}

const remove = async (id) => {
    const todoDeleted = await Todo.findOneAndDelete(id)

    return todoDeleted
}

module.exports = {
    getAll, getById, create, update, removeAll, remove
}
