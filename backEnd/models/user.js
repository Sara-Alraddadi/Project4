var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
    } ,
    userType : {
        type : String,
        default : "user"
    },
    images: {
        type: Array //required in the front End
    }

})

var User = mongoose.model('User', userSchema);
module.exports = User;