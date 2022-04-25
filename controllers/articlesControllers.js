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


async function updateThisArticle (req, res) {
    try {
        const data = await articlesModel.replaceOne(
        {
            _id: req.params.id
        },
        {
            title: req.body.title,
            content: req.body.content
        });
        res.send(data);
    } catch (err) {
        console.log(err);
    }
}

async function updateOnlyProp (req, res) {
    try {
        const data = await articlesModel.updateOne(
            {
                _id: req.params.id
            },
            {
                title: req.body.title,
            });
            res.send(data);
    } catch (err) {
        console.log(err)
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

module.exports = {getArticles, getThisArticle, updateThisArticle, updateOnlyProp, createArticle, deleteArticle}
