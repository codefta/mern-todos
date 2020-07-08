const express = require('express')
const router = express.Router()
const todoService = require('../services/todoService')

router.get('/', async (_req, res, next) => {
    try {
        const todos = await todoService.getAll()
        res.status(201).json(todos)
    } catch (e) {
        next(e)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const todo = await todoService.getById(req.params.id)
        res.status(201).json(todo)
    } catch (e) {
        next(e)
    }
})

router.post('/', async (req, res, next) => {
    const body = req.body

    try {
        const addedTodo = await todoService.create(body)

        res.json(addedTodo)
    } catch (e) {
        next(e)
    }
})

router.put('/:id', async (req, res, next) => {
    const body = req.body

    try {
        const updatedTodo = await todoService.update(body, req.params.id)

        res.json(updatedTodo)
    } catch (e) {
        next(e)
    }
})

router.delete('/', async (req, res, next) => {
    try {
        await todoService.removeAll()

        res.status(204).end()
    } catch (e) {
        next(e)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await todoService.remove(req.params.id)

        res.status(204).end()
    } catch (e) {
        next(e)
    }
})

module.exports = router
