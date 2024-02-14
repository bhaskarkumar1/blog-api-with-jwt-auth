const express=require("express")
const {login,register}=require("../controllers/userController")


const Router=express.Router()


Router.post("/login",login)

Router.post("/register",register)


module.exports=Router