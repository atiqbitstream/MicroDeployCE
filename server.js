const express = require('express')
const app = express();

app.get("/users",(req,res)=>{
    res.json([{id:1, name: "atiq khan"},{id:2, name: "noman khan"}]);
});

app.listen(8080, ()=> console.log("User service running on port 8080"));