const mongoose=require("mongoose");

const dbConnection= ()=>{
    mongoose.connect(process.env.DB_URI,
        {useNewUrlParser:true},
        {useUnifiedTopology:true}
        ).then((res)=>{
            console.log(`Database is running on ${res.connection.host}`);
        }).catch((err)=>{
            console.log(err.message);
        })
}

module.exports=dbConnection;