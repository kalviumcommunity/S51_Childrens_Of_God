const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childrenDetails = new Schema({
    ID:{type:Number},
    INSTITUTIONNAME :{type:String},
    DONORNAME : {type:String},
    AMOUNTGIVENBYDONOR : {type:String},
    CREATEDBY: {type:String},

},{
    timestamps:true,
})
const Model = mongoose.model("datas", childrenDetails)
module.exports = Model