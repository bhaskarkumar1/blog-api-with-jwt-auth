const Post=require("../models/Post")

const getAllPost=(req,res)=>{
    Post.find({}).then((result)=>{
        res.status(200).json(result)

    }).catch((error)=>{
        res.status(500).json({"error fetching all post":error})
    })
}

const getASpecificPost=(req,res)=>{
    console.log(req.params)
    Post.find({title:req.params.title}).then((result)=>{
        res.status(200).json(result)
    }).catch((error)=>{
        res.status(500).json({"error while fetching specific post": error})
    })
}


const createAPost=(req,res)=>{
    console.log(req.body)
    const newData=req.body

    const newObj=new Post(newData)
    newObj.save().then((result)=>{
        res.status(200).json({"status":"new data added success"})     
    }).catch((error)=>{
        res.status(500).json({"Error in saving the new Details":error})
    })


}


const deleteAPost=(req,res)=>{
    console.log(req.params)
    Post.deleteOne({_id:req.params.id}).then(()=>{
        res.status(200).json({"deletion of post status":res.statusCode})
    }).catch(()=>{
        res.status(500).json({"delete a post status":res.statusCode})
    })
}


const updateAPost=(req,res)=>{
    console.log(req.params)
    console.log(req.body)
    // res.send("ok in update")
    Post.updateOne({_id:req.params.id},req.body).then((result)=>{
        res.status(200).json({"Updation done for Id": req.params.id})
    }).catch((error)=>{
        res.status(500).json({"error while updating":req.body.id})
    })
}

module.exports={getAllPost,getASpecificPost,createAPost,deleteAPost,updateAPost}