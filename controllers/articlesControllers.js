const articlesModel = require('../models/articlesModel')

async function getArticles (req, res) {
    try {
        const data = await articlesModel.find({});
        res.send(data);
    } catch (err) {
        console.log(err);
    }
}

async function getThisArticle (req, res) {
    try {
        const data = await articlesModel.findById({
            _id: req.params.id
        });
        res.send(data);
    } catch (err) {
        console.log(err);
    }
}

const createArticle = async (req, res) => {
    try {
        const newArticle = await articlesModel.create({
            title: req.body.title,
            content: req.body.content
        })
        res.redirect('/articles')
    } catch (err) {
        console.log(err)
    }
}

const deleteArticle = async (req, res) => {
    try {
        const data = await articlesModel.deleteMany({
        })
        res.redirect('/articles')
    } catch (err) {
        console.log(err)
    }
}

module.exports = {getArticles, getThisArticle, createArticle, deleteArticle}




/* async function showHomepage (req, res) {
    try {
        let newArticles = await articlesModel.create(
            {
              title: 'REST',
              content: 'REpresentational State Transfer is a type of architecture for APIs that follow some rules.'
            },
            {
                title: 'Promise',
                content: 'A promise represents an operation that has not completed yet.'
            }
            )
    } catch (err) {
        console.log(err);
    }
} */