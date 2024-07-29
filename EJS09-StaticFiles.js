const express = require("express");
const app=express();
const port=9000;
app.use(express.static('public'));
app.listen(port,()=>{
    console.log("Server running at port number 9000");
});