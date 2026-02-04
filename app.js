const express=require('express')
const app=express()

app.get('/getUserData',(req,res)=>{
    try{
        //logic of DB call and get user data
    throw new Error("njjj")
     res.send("user data sent")
    }
    catch(err)
    {
    res.status(500).send("some error contact support team")
    }
})
app.use('/',(err,req,res,next)=>{
    res.status(500).send("something went wrong")
})
app.listen(3000,()=>{
    console.log("server is running successfully on port 3000")
})