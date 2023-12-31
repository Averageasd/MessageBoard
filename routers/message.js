const express = require('express');
const router = express.Router();

const dateFormat = require("date-format");

const messages = [];

router.get('/', (req, res) => {
    res.render('index.ejs', {messages: messages, dateFormat: dateFormat});
});

router.post('/new', (req, res) => {
    const message = {name: req.body.name, message: req.body.message, date: new Date()};
    messages.push(message);
    res.redirect("/");
});

module.exports = router;
