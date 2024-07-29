var myexpress=require("express");
var app=myexpress();
var port=8000;
app.get("/",(req,res)=>{
    res.send("Hello World From ExpressJS");
});
app.get("/about",(req,res)=>{
    res.send("Display from About page");
});
app.listen(port,()=>{
    console.log("Running on port 8000");
})

//https://localhost:/8000
//https://localhost:/8000/about