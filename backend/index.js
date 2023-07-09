const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const UserRouter = require('./routes/userRouter')
const TodoRouter = require('./routes/todoRouter')
const todoRouter = require('./routes/todoRouter')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', UserRouter)
app.use('/todo', todoRouter)

mongoose.connect('mongodb://localhost:27017/TodoApp')
    .then(() => console.log('Connected to database'))
    .catch(() => console.log('Some error in database connection'))

app.listen(8000, () => {
    console.log('Server running at port 8000')
})