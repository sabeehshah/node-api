const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Events', EventsSchema)