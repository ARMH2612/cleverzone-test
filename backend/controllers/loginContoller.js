const crypting = require('../util/crypting')

const User = require('../models/Users')

// const getUsers = (req,res)=>{
//     console.log(pool);
//     res.send('hey you are here');
// }

const login = async (req,res)=>{
    const {email, psw} =  req.body
    const user = await User.findAll({
        where :{
            email : email
        }
    })
    if(user.length===1){
        // check password :
        if(await crypting.compare(psw, user[0].dataValues.psw)){
            return res.send(user)
        }else{
            res.status(400).json({message : "Password incorrect"})
        }
    }else{
        res.status(400).json({message: "User does not exist"})
    }
}

const signup = async (req,res)=>{
    const {email, psw, rep_psw} = req.body;
    if(psw === rep_psw){
        const users = await User.findAll({
            where:{
                email : email
            }
        });
        if(users.length === 0){
            // user doesnt exist, create one.
            const hash = await crypting.hashPassword(psw)
            await User.create({email : email, psw : hash})
            .then((user)=>{
                if(user){
                    res.send(user)
                }else{
                    res.status(400).send("Error: Insert user error.")
                }
            })
            
        }else{
            console.log("user exists");
            res.status(400).json({message : "User already exists"})
        }
    }else{
        res.status(400).json({message : "Passwords dont match"})
    }
}

module.exports = {
    // getUsers,
    login,
    signup
}