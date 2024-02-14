const User=require("../models/User")
const jwt=require("jsonwebtoken")
const env=require("dotenv")


const register=(req,res)=>{
    // res.send("register pg")
    console.log(req.body)
    const newObj=new User(req.body)
    newObj.save().then((result)=>{
        res.status(200).json({"status":"new user created success!"})

    }).catch((error)=>{
        res.status(500).json({"error":"unable to create a new User!"})

    })
}


const login=(req,res)=>{
    const usertryingLogin=req.body
    console.log(usertryingLogin)
    User.findOne(usertryingLogin).then((result)=>{

        // res.send(result.username)
        const username=result.username


        const token = jwt.sign({ userId: username }, process.env.SECRET_KEY, {
            expiresIn: '1h',
            });

            res.json({"token":token})


    }).catch((error)=>{
        res.send("the credentials are wrong!")

    })
}

module.exports={
    register,login
}