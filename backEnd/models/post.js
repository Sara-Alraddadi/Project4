var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: {
        type: String,
        default: ''
    },
    eventType: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: ''
    },
    deadline: {
        type: Date,
        default: +new Date() + 7*24*60*60*1000
    },
    price: {
        type: Number,
        default: 0
    }, 
    users : Array  ,
    status : String ,
    offers : [{type : mongoose.Schema.Types.ObjectId , ref : 'Offer'}]


}) 

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
