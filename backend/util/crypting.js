const bcrypt = require('bcrypt')

const hashPassword =  async (password)=>{    
    try{
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(password, salt)
        return hash
    }catch (err){
        console.log('err : ',err);
    }
}

const compare = async (password, hashed) =>{
    console.log(await bcrypt.compare(password, hashed));
    return await bcrypt.compare(password, hashed)
}

module.exports ={
    hashPassword,
    compare
}