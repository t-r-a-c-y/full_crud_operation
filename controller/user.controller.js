const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const createUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        const existUser = await User.findOne({email});
        if(existUser){
            res.status(409).json({message:`User with email ${email} already exists`, sucess: false});
        }else{
            const hashPassword = bcrypt.hashSync(password,15);
            const user = new User({
                name,email,password:hashPassword
            });
            await user.save();
            res.status(201).json({data: user, sucess: true, message: 'registered successfully'});
        }
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            const match = bcrypt.compareSync(password, userExist.password);
            if(match){
                const secret = 'fdfd'
                const token = jwt.sign({_id: userExist._id}, secret);
                res.status(200).json({token, sucess: true, message: 'Logged in successfully'});
            }else{
                res.status(401).json({message: 'Invalid credentials', sucess: false});
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: message.error})        
        
    }
}
module.exports ={
    createUser,
    login
}