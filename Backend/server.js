require("dotenv").config();

const express =require("express")
const app=express()
const mongoose=require("mongoose")
const cors = require("cors")
var bodyParser = require('body-parser')
const {connectDB,isConnected}=require('./config/dbConn.js')
const {childrenRouter} = require("./Routes/Children.routes.js")
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
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



  
app.listen(3000, async()=>{
    await connectDB();
    console.log('Hey')
});