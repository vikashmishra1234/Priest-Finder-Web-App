const mongoose = require('mongoose');

const feedbackSchema= mongoose.Schema({
   user_Name:{
        type:String,
        required:true
    },
    Feedback:{
        type:String,
        required:true
    },
    priestId:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('feedback',feedbackSchema);