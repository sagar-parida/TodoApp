const todoRouter = require('express').Router()

const Todo = require('../model/Todo')

todoRouter.get('/', async (req, res) => {
    try {
        const userId = req.query.userId
        const data = await Todo.find({ userId })
        res.send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

todoRouter.post('/', async (req, res) => {
    try {
        const todo = new Todo(req.body)
        await todo.save()
        res.send("Success")
    } catch (error) {
        res.status(400).send(error.message)
    }
})



module.exports = todoRouter
