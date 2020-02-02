var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
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
    },
    posts: [{type : Schema.Types.ObjectId, ref : 'Post'}]

})

var User = mongoose.model('User', userSchema);
module.exports = User;