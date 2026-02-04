const express=require('express')
const app=express()
const {adminAuth}=require('./middlewares/auth')
// dynamic routing
app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params)
    res.send({"firstname":"geethika","lastname":"yadav"})
})
// This will only handle post call to /user
app.post("/user",(req,res)=>{
    res.send('data successfully saved to the database')
})
// This will only handle delete call to /user
app.delete("/user",(req,res)=>{
    res.send('data deleted successfully')
})
app.use("/",(req,res)=>{
    res.send("hello")
})
app.use("/hello",(req,res)=>{
    res.send("hello geethika")
})
app.use("/",(req,res)=>{
    res.send("hello")
})

// GET /users =>middleware chain => request handler
app.use("/",(req,res,next)=>{
    // res.send("handling / Route")
    next()
})
app.get("/user",(req,res,next)=>{
    res.send("Handling /user route")
    next()
})
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