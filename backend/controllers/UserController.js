const Users = require("../models/User");


exports.createUser = async (req, res) => { 
    try{
        const newUser = new Users(req.body);
        await newUser.save();
        res.status(201).json({message: "User created successfully!", user: newUser });

    }catch(error){
        res.status(400).json({error: error.message});
    }
};


exports.getAllUsers = async (req, res) =>{
    try{
        const users = await Users.find();
        res.status(200).json(users);

    }catch(error){
        res.status(500).json({error: error.message});
    }
};


exports.getUserById = async (req, res) =>{
    try{
        const user = await Users.findById(req.params.id)
            .populate("coffeeProfile")
            .populate("favorites");
        if(!user) return res.status(404).json({message: "User not found"});
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.updateUser = async(req, res)=>{
    try{
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({message: "User updated Successfully", user: updatedUser});
    }catch (error){
        res.status(400).json({ error: error.message});
    }
};


exports.deleteUser = async (req, res)=>{
    try{
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "User deleted successfully"});
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};
