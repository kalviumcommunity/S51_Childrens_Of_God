const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Login = new Schema({
    Username:{type:String},
    Password :{type:String},
  

},{
    timestamps:true,
})
const Models = mongoose.model("logindatas", Login)
module.exports = Models 