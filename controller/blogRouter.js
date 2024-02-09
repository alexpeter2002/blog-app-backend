const express=require("express")
const usermodel=require("../model/usermodel")

const router=express.Router()
router.get("/",(req,res)=>{
    res.send("Hello")
})

router.post("/signup",async(req,res)=>{
    let data=req.body
    let user=new usermodel(data)
    let result=await user.save()
    res.json({
        status:"success"
    })
})


module.exports=router