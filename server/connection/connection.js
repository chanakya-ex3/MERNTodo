const mongoose = require('mongoose');

const connection = async(req,res)=>{
    try{
        await mongoose.connect("mongodb+srv://mernUser:passwd@merncluster0.rxoqfdw.mongodb.net/?retryWrites=true&w=majority&appName=MernCluster0").then(()=>{
            console.log("DB Connected")
    });
    }
    catch(err){
        console.log("DB Connection Failed");
        console.log(err);
    }
}

connection();