const express=require('express')
const app=express()
//This will only handle get call to /user
app.get("/user",(req,res)=>{
    res.send({"firstname":"geethika","lastname":"yadav"})
})
//This will only handle post call to /user
app.post("/user",(req,res)=>{
    res.send('data successfully saved to the database')
})
//This will only handle delete call to /user
app.delete("/user",(req,res)=>{
    res.send('data deleted successfully')
})
//this will match all http method api calls to /test
app.use("/",(req,res)=>{
    res.send("hello")
})
// app.use("/hello",(req,res)=>{
//     res.send("hello geethika")
// })
// app.use("/",(req,res)=>{
//     res.send("hello")
// })
app.listen(3000,()=>{
    console.log("server is running successfully on port 3000")
})