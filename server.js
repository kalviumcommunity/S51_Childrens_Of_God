// This line imports the Express module. The express variable is now an instance of the Express application.
const express = require('express')
// This line creates an Express application by calling the express() function. The app variable is now an instance of your Express application.
const app = express()

// routes
// These lines define two routes:

//The first route ('/') responds with the text "Hello Node API" when the root URL is accessed.
//The second route ('/ping') responds with the text "pong" when the '/ping' URL is accessed.
//The app.get() method is used to define a route for HTTP GET requests.

app.get('/',(req,res)=>{
    res.send('Hello Node API ')
})
app.get('/ping',(req,res)=>{
    res.send("pong")
})
// This code starts the Express server and makes it listen on port 3000. When the server is successfully started, it logs a message to the console.
app.listen(3000,()=>{
    console.log(`Node API app is running on port 3000`)
})