var myexpress=require("express");
var app=myexpress();
var port=8000;
app.get("/",(req,res)=>{
    res.send("Hello World From ExpressJS");
});
app.listen(port,()=>{
    console.log("Running on port 8000");
})
app.get("/about",(req,res)=>{
    res.send("Display from About page");
});
app.get("/contact",(req,res)=>{
    res.send("Display from contact page");
});
app.get("/home",(req,res)=>{
    res.send("Display from home page");
});

