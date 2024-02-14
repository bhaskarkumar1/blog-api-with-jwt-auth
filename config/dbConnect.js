const env=require("dotenv").config()

const mongoose=require("mongoose")

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB status : 200 ")
}).catch((error)=>{
    console.log({"error":error})
})
