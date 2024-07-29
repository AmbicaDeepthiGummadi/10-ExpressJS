const express = require("express")
const app=express();
const port=9000;
app.use(express.json());
app.post('/user',(req,res)=>{
    res.send("Hello, "+req.body.name);
});
app.listen(port,()=>{
    console.log("Server running at port number 9000");
});