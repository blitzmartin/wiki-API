const express = require('express')
const router = express.Router()
const articlesControllers = require('../controllers/articlesControllers')

//  /articles
router.get('/', articlesControllers.getArticles)
router.get('/:id', articlesControllers.getThisArticle)
router.post('/', articlesControllers.createArticle)
router.delete('/', articlesControllers.deleteArticle)

module.exports = router;