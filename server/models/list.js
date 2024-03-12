const mongoose = require("mongoose");
const list = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    body:{
        type:String,
        required:true
    },
    user:[
        {
            type:mongoose.Types.ObjectId,
            ref:"User",
        }
    ]

});

module.exports = mongoose.model("List",list);