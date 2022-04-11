const postModel = require('../models/ligne_commande-model')

module.exports = {
post : (req,res) => {
    if(!req.userid)
        return res.status(400).json({success : false, message : "Access denied, please login."})
    postModel.insert(req.body, message =>{res.json({success : true, message})})
},
put : (req,res)=>{
    if(!req.userid)
        return res.status(400).json({success : false, message : "Access denied, please login."})
    postModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
},
delete : (req,res)=>{
    if(!req.userid)
        return res.status(400).json({success : false, message : "Access denied, please login."})
    postModel.delete(req.params.id, result =>{res.json({success : true, result})})
}
}