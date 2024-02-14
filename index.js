const express=require("express")
const postRoutes=require("./routes/postRoutes")
const userRoutes=require("./routes/userRoutes")
require("./config/dbConnect")
const app=express()
const verifyToken=require("./middleware/authMiddleWare")


app.use(express.json())

const port=process.env.PORT || 9000

app.get("/",(req,res)=>{
    res.status(200).json({"status":res.statusCode})
})

app.use("/api/post",verifyToken,postRoutes)

app.use("/api/auth",userRoutes)

// changed as we want to deploy on cyclic which is serverless platform as per there api

app.listen(port,()=>{
    console.log("Server status: 200")
})


