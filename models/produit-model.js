var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'market_place'
  });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM produit';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM produit WHERE id_produit = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (post,next)=>{
        let sql = 'INSERT INTO produit SET ?'
        db.query(sql,post,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,produit,next)=>{
       

        let sql = `UPDATE produit SET ? WHERE id_produit=?`

        db.query(sql,[produit,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM produit WHERE id_produit=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}