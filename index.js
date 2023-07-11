const express = require('express');
const app = express();
require('./Config/config')
const users = require('./Schema/useScema')
const cors = require("cors");
require('dotenv').config()

app.use(cors());
app.use(express.json())


app.post("/",async(req,res)=>{
    console.log(req.body)
    const data = await new users(req.body);
    console.log("object",data)
    const result = await data.save()
    console.log(result)
    
    res.send("result")
})

app.get("",(req,res)=>{
    res.send("hello")
})



app.listen(4000)
