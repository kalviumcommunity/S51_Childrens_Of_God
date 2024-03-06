const express = require('express');
const childrenRouter = express.Router();
const ChildrenModel = require("../Children.model");

childrenRouter.get('/getallchildren', async (req, res) => {
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



childrenRouter.post('/addchild', async (req, res) => {
    try {
        const child = await ChildrenModel.create(req.body);
        res.status(201).json(child);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

childrenRouter.patch('/updateuser/:ID', async (req, res) => {
    try {
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
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});


childrenRouter.delete('/deleteuser/:ID', async (req, res) => {
    try {
        const userId = req.params.ID;
        const deletedUser = await ChildrenModel.findOneAndDelete({userId});
        res.status(200).json("deleted user");
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

module.exports = {childrenRouter};
