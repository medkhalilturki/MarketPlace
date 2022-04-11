const userModel = require('../models/users-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = {
    get : (req,res) => {
        userModel.selectAll((result)=>{res.json({success : true, result})})
    },
    //Helper
    getById : (req,res)=>{
        userModel.selectById(req.params.id, result =>{res.json(result)})
    },
    //Resiter
    post : (req,res) => {
        const newUser = req.body
        if(!newUser.email || !newUser.password || !newUser.nom) 
            return res.status(400).json({success : false, message : "Please enter all data"})

        userModel.selectByEmail(newUser.email, user => {
            if(user)
                return res.status(400).json({success : false, message : "Email already exist"})

            bcrypt.genSalt(10, (err, salt)=>{
                if(err) throw err
                bcrypt.hash(newUser.password, salt, (err, hash)=>{
                    if (err) throw err
                    newUser.password = hash
                    userModel.insert(newUser, message =>{
                        jwt.sign(
                            {id : message.insertId},
                            config.get("jwtSecret"),
                            { expiresIn: config.get("tokenExpire") },
                            (err, token)=>{
                                if(err) throw err
                                res.json({
                                    success : true,
                                    token,
                                    user : {
                                        id: message.insertId,
                                        nom: newUser.nom,
                                        email: newUser.email,
                                    }
                                })
                            }
                        )
                    })
                })
            })
        })
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        userModel.update(req.params.id,req.body, result =>{res.json({success : true , result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        userModel.delete(req.params.id, result =>{res.json({success : true , result})})
    }
}