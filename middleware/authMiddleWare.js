const jwt=require("jsonwebtoken")
const env=require("dotenv")
const verifyToken=(req,res,next)=>{
    const token=req.header("Authorization")
    if(token){
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if(decoded){
        next()
    }else{
        res.status(403).json({"message":"invalid token"})
    }
}else{
    res.send("provide a token first")
}
}


module.exports=verifyToken