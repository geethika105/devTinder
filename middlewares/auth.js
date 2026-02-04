const adminAuth=(req,res,next)=>{
const Token="xyz"
const isAuthorised=Token=="xyz"
if(!isAuthorised){
    res.status(401).send("unauthorised request") 
}
else{
   next()
}
}
module.exports={
    adminAuth
}