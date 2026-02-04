const express=require('express')
const app=express()
const {adminAuth}=require('./middlewares/auth')
//working of middlewares
app.use("/admin",adminAuth)
app.get('/admin/getAllData',(req,res)=>{
    res.send("All data sent")
})
app.get('/admin/DeleteAllData',(req,res)=>{
    res.send("Deleted a user")
})
app.listen(3000,()=>{
    console.log("server is running successfully on port 3000")
})