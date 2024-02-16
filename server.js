const express = require('express')
const app = express()

// routes

app.get('/',(req,res)=>{
    res.send('Hello Node API ')
})
app.get('/ping',(req,res)=>{
    res.send("pong")
})
app.listen(3000,()=>{
    console.log(`Node API app is running on port 3000`)
})