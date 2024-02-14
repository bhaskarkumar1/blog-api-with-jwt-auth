
const express=require("express")
const {getAllPost,getASpecificPost,createAPost,deleteAPost, updateAPost}=require("../controllers/postController")


const Router=express.Router()


Router.get("/",getAllPost)
Router.get("/:title",getASpecificPost)


Router.post("/",createAPost)

Router.delete("/:id",deleteAPost)

Router.put("/:id",updateAPost)

module.exports=Router