const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    author: {type:String, required: true},
    message: {type: String, required: true},
    datePosted : {type:Date, default: Date.now()}
});

MessageSchema.statics.insertMessage = async function(newMessage){
    try{
        const msg = await this.create(newMessage);
        return msg.save();
    }
    catch (err){
        throw err;
    }

}

MessageSchema.statics.getAllMessages = function(){
    return this.find();
}

module.exports = mongoose.model("Message", MessageSchema);