var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'market_place'
  });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM categorie';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM categorie WHERE id_cat = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (post,next)=>{
        let sql = 'INSERT INTO categorie SET ?'
        db.query(sql,post,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,catg,next)=>{
       

        let sql = `UPDATE categorie SET ? WHERE id_cat=?`

        db.query(sql,[catg,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM categorie WHERE id_cat=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}