const myexpress=require("express");
const app=myexpress();
const port=8000;
app.get('/search',(req,res)=>{
    const query = req.query.q;
    res.send("Search query : "+query);
});
app.listen(port,()=>{
    console.log("Server Running on port 8000");
});
//http://localhost:8000/search?q=hello