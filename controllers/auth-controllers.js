const jwt = require("jsonwebtoken")
const bcrypt =require ("bcrypt")
const config = require("config")
const userModel = require("../models/users-model")


module.exports ={
    login : (req , res) => {
        let {email , password}=req.body

        if(!email || !password)

        return res.status(400).json({success: false , message : "please enter all data"})

    userModel.selectByEmail(email , user => {
        if (!user)

            return res.status(400).json({success : false , message : " User do not exist"})
        bcrypt.compare(password , user.password)
            .then(result =>{
                console.log(password , user.password)
                if(!result)
                    return res.status(400).json({success : false , message :"worng password"})


                    userModel.selectByEmail(user.email , user =>{
                        jwt.sign(
                            {id : user.id},
                            config.get("jwtSecret"),
                            {expiresIn:config.get("tokenExpire")},
                            (err,token)=>{
                                if(err) throw err 
                                res.json({
                                    success : true ,
                                    token,
                                    user : {
                                        id: user.id , 
                                        nom:user.nom,
                                        email:user.email ,
                                    }
                                })
                            }
                        )
                    })
            })
    })
    },
    verifyToken : (req , res) => {
        console.log(req.userid)
    }
}