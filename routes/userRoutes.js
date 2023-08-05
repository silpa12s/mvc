const express=require("express");
const { registerUser } = require("../contollers/userContollers");
const router=express.Router();

router.route("/register").post(registerUser);



module.exports=router