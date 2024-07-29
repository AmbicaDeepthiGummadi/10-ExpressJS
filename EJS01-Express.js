var express=require("express");
var app=express();
var port=8000;
app.get("/",(req,res)=>{
    res.send("Hello World From ExpressJS");
});
app.listen(port,()=>{
    console.log("Running on port 8000");
})

//npm install express
//https://localhost:/8000