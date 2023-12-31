const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const dateFormat = require('date-format');

// parse json data
app.use(express.json());

// parse form data
app.use(express.urlencoded({extended: false}));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(path.join(__dirname, 'views')));

const messages = [];

app.get('/', (req, res) => {
    res.render('index.ejs', {messages: messages, dateFormat: dateFormat});
});

app.post('/new', (req, res) => {
    const message = {name: req.body.name, message: req.body.message, date: new Date()};
    messages.push(message);
    res.redirect("/");
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});