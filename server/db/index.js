const mongoose = require('mongoose')

mongoose
    .connect('mongodb://mongo:27017/blog', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
