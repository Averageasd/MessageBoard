const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://nguyenhuynh:PhoneQuery9497+@atlascluster.zengp2a.mongodb.net/message_db?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}
// parse json data
app.use(express.json());

// parse form data
app.use(express.urlencoded({extended: false}));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(path.join(__dirname, 'views')));

const message = require('./routers/message');

app.use('/',message);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});