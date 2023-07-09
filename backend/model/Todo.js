const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    taskName: String,
    isCompleted: {
        type: Boolean,
        default: false
    },
    userId: String
})

module.exports = mongoose.model('Todo', TodoSchema)