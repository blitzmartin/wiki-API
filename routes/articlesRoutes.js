const express = require('express')
const router = express.Router()
const articlesControllers = require('../controllers/articlesControllers')

//  /articles
router.get('/', articlesControllers.getArticles)
router.post('/', articlesControllers.createArticle)
router.delete('/', articlesControllers.deleteArticle)

router.get('/:id', articlesControllers.getThisArticle)
router.put('/:id', articlesControllers.updateThisArticle)
router.patch('/:id', articlesControllers.updateOnlyProp)
router.delete('/:id', articlesControllers.deleteThisArticle)

module.exports = router;