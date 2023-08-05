const User=require("../models/userModels")

exports.registerUser= async(req,res,next)=>{

    console.log("12345ghth",req.body);

   try {
    const user= await User.create(req.body)

    if(user){
        res.status(201).json({
            success:true,
            user,
            message:"User Registered"
        });
    }
    
   } catch (error) {
    res.status(401).json({
        success:false,
       message: error.message
    });
   }
}