const express =require("express");
const app =express();
const bodyParser=require("body-parser");
const cors =require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))


//Routes
const userRoutes=require("./routes/userRoutes")

app.use("/api/v1", userRoutes);
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send('something broke!')
})


module.exports=app