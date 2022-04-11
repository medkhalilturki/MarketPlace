var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'market_place'
  });



  module.exports = {
    insert : async (post,next)=>{
        let sql = 'INSERT INTO ligne_commande SET ?'
        db.query(sql,post,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,ligne_commande,next)=>{
        

        let sql = `UPDATE ligne_commande SET ? WHERE id=?`

        db.query(sql,[ligne_commande,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM ligne_commande WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}