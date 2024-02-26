require("dotenv").config();

const express =require("express")
const app=express()
const mongoose=require("mongoose")
const {connectDB,isConnected}=require('../config/dbConn.js')
const {childrenRouter} = require("../Routes/Children.routes.js")

connectDB();

app.use("/",childrenRouter)


app.get('/ping', (req,res) =>{
    res.send('Hello NODE API')
})
app.get('/home', (req,res) =>{
    res.json({
        message: isConnected()?"Database is connected":"Database is disconnected"
    })
})



  
app.listen(1000, async()=>{
    await connectDB();
    console.log('Hey')
});