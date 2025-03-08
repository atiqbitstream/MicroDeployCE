const express = require("express");
const app  = express();

app.get("/orders",(req,res)=>{
    res.json([{id:101, item: "laptop"},{id:102, item:"phone"}])
});

app.get("/expiredOrders",(req,res)=>{
    res.json([{id:102, item: "Trackball"},{id:102, item:"windows xp"}])
});

app.listen(8080, ()=>console.log("order service running on port 8080"));



