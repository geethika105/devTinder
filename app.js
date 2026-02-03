const express=require('express')
const app=express()
app.use("/test",(req,res)=>{
    res.send("hello from server")
})
app.use("/hello",(req,res)=>{
    res.send("hello geethika")
})
app.listen(3000,()=>{
    console.log("server is running successfully on port 3000")
})