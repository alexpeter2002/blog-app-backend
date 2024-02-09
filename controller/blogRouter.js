const express=require("express")
const usermodel=require("../model/usermodel")

const router=express.Router()

const bcrypt=require("bcryptjs")
hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.get("/",(req,res)=>{
    res.send("Hello")
})

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let Password=data.Password
    hashPasswordGenerator(Password).then(
        (hashedpassword)=>{
            console.log(hashedpassword)
            data.Password=hashedpassword
            console.log(data)
            let user=new usermodel(data)
            let result=user.save()
            res.json({
                status:"success"
            })
        }
    )
  
   
})


module.exports=router