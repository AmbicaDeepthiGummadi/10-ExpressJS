const myexpress=require("express");
const app=myexpress();
const port=8000;
app.get('/user/:id',(req,res)=>{
    res.send("User ID : "+req.params.id);
});
app.listen(port,()=>{
    console.log("Server Running on port 8000");
});

//http://localhost:8000/user/123