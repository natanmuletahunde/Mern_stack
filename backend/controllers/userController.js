const User = require('../models/userModel');  
// loginController

const loginUser = async (req,res)=>{
 res.json({msg: "Login successful"});
} 

// signupUser 

const signupUser = async (req,res)=>{
    res.json({msg: "Signup successful"});
}

module.exports={ signupUser,loginUser}