const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRouter=require("./controller/blogRouter")
const postRouter=require("./controller/postRouter")


const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://alexpeter2002:alexpeter2002@cluster0.xcoplqs.mongodb.net/blogsDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/blog",userRouter)
app.use("/api/post",postRouter)

app.listen(3001,()=>{
    console.log("server running")
})

