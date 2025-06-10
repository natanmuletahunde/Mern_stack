    

// loginController

const loginUser = async (req,res)=>{
 res.json({message: "Login successful"});
} 

// signupUser 

const signupUser = async (req,res)=>{
    res.json({message: "Signup successful"});
}

module.exports={ signupUser,loginUser}