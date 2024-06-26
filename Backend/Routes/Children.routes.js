const express = require('express');
const childrenRouter = express.Router();
const ChildrenModel = require("../Children.model");
const jwt = require('jsonwebtoken')
const Joi = require("joi")
const authenticateToken = (req, res,next) => {
    const token = req.body.token
   
    if (!token) {
      next()
      return
    }
  
    jwt.verify(token,  process.env.ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  
      req.user = decoded;
      next();
    });
  }

childrenRouter.post('/getallchildren',authenticateToken, async (req, res) => {
    try {
        const children = await ChildrenModel.find();
        // console.log("ch", children)
        res.status(200).json(children);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});
const signupSchema = Joi.object({
    ID:Joi.number().required(),
    DONORNAME: Joi.string().required(),
    INSTITUTIONNAME: Joi.string().required(),
    AMOUNTGIVENBYDONOR: Joi.string().required(),
});



childrenRouter.post('/addchild',authenticateToken, async (req, res) => {
    const {error, value} = signupSchema.validate(req.body, {abortEarly:false});
// { abortEarly: false }: This is an option passed to the validate method. Setting abortEarly to false means that the validation process won't stop at the first encountered error. 
//By default, many validation libraries stop on the first error.

//  When abortEarly is set to false, the validation process continues, and all errors are collected in the error property.

   
    try {
        if (!error){
            const {ID,DONORNAME,INSTITUTIONNAME,AMOUNTGIVENBYDONOR} = req.body
            const newChild = await ChildrenModel.create({ID,DONORNAME,INSTITUTIONNAME,AMOUNTGIVENBYDONOR});
            res.status(201).json(newChild);
            }
            else{
                return res.status(400).send({
                    message: `Bad request, error${error}`
                })
            }
        const child = await ChildrenModel.create(req.body);
        res.status(201).json(child);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

childrenRouter.patch('/updateuser/:ID',authenticateToken, async (req, res) => {
    const {error, value} = signupSchema.validate(req.body, {abortEarly:false});
    try {
        if (!error){
        const userId = req.params.ID;
        const updateFields = req.body;

        const existingUser = await ChildrenModel.findOne({ID: userId });

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const updatedUser = await ChildrenModel.findOneAndUpdate(
            { ID: userId },
            { $set: updateFields },
            { new: true }
        );

        res.status(200).json(updatedUser);
        }else{
            return res.status(400).send({
                message: `Bad request, error${error}`
            })
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});


childrenRouter.delete('/deleteuser/:ID',authenticateToken, async (req, res) => {
    try {
        const deletedUser = await ChildrenModel.findOneAndDelete({ID:req.params.ID});
        res.status(200).json("deleted user");
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

module.exports = {childrenRouter};
