const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Register

router.post("/register",async(req,res)=>{
    try{
        const {email, username, password} = req.body;
        const hashPassword = bcrypt.hashSync(password,10);
        const user = new User({email,username,password: hashPassword});
        await user.save().then(()=>{
            res.status(200).json({user: user});
        })

    }
    catch(error){
        res.status(400).json({message:"User Already Exists"})
    }
})

// Login
router.post("/signin",async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user){
            res.status(400).json({message: "Please Register First"});
        }
        isPassCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isPassCorrect){
            res.status(400).json({message: "Invalid Password"});
        }
        const { password, ...others } = user._doc;
        res.status(200).json({ others });
    }
    catch(error){
        res.status(400).json({message:"Unable to Login"})
    }
})



module.exports = router;