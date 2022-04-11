var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'market_place'
  });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM commande';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM commande WHERE id_commande = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (post,next)=>{
        let sql = 'INSERT INTO commande SET ?'
        db.query(sql,post,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,comm,next)=>{
        

        let sql = `UPDATE commande SET ? WHERE id_commande=?`

        db.query(sql,[comm,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM commande WHERE id_commande=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}