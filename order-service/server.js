const express = require("express");
const app  = express();

app.get("/orders",(req,res)=>{
    res.json([{id:101, item: "laptop"},{id:102, item:"phone"}])
});

app.listen(8000, ()=>console.log("order service running on port 8080"));