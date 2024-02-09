const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        Name: String,
        Age: String,
    Mobile: String,
    Address: String,
    Pin: String,
    Email: String,
    Password: String,
    }
)
module.exports=mongoose.model("users",userSchema)