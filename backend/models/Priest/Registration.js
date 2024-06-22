const mongoose = require('mongoose');

const priestSchema= mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true,
        unique:true
    },
    Whatsapp:{
        type:String,
        required:true
    },
    Invites:{
        type:String,
        default:"0"
    },
    Profile:{
        type:String,
    }
});

module.exports = mongoose.model('priest',priestSchema);