const mongoose = require('mongoose')

const articlesSchema = new mongoose.Schema({
    title : String,
    content: String
})

module.exports = new mongoose.model('Article', articlesSchema, 'articles')