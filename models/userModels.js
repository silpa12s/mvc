const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const validator= require("validator");

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"please enter fullname"],
        minlength:[4,"please enter fullname with 3 min length"],
        maxlength:[10,"fullname should'nt exceed 10 characters"]
    },
    email:{
        type:String,
        required:[true,"please enter email"],
        unique:true,
        validate:[validator.isEmail,"please enter a valid email"],
    },
    password:{
        type:String,
        required:[true,"please enter password"],
        select:false,
    },address:{
        type:String,
        required:[true,"please enter address"],
    }
});

userSchema.pre("save", async function(){

if(!this.isModified("password")){
    next();
}

this.password = await bcrypt.hash(this.password,10);
   
});


module.exports=mongoose.model("User",userSchema);