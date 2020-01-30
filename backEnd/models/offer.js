var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var offerSchema = new Schema({
    details: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: +new Date() + 7*24*60*60*1000
    },
    photographerName: {
        type: String,
        default: ''
    },
    photogrphor : {type : mongoose.Schema.Types.ObjectId , ref : 'user'}

})

var Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;