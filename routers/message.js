const express = require('express');
const router = express.Router();
const messageModel = require('../model/messageModel');

const dateFormat = require("date-format");

const messages = [];

router.get('/', async (req, res) => {
    try {
        const messages = await messageModel.getAllMessages();
        // res.send(messages);
        res.status(200).render('index.ejs', {messages: messages, dateFormat: dateFormat});
    } catch (err) {
        console.log(err);
    }
});
router.get("/new", (req,res)=>{
   res.render('form.ejs');
});
router.post('/new', async (req, res) => {
    const message = {author: req.body.name, message: req.body.message, datePosted: new Date()};
    messageModel.insertMessage(message)
        .then(() => res.status(200).redirect("/"))
        .catch((err) => {
            console.log(err.message);
            res.status(403).render('error.ejs');
        });
});

module.exports = router;
