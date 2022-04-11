var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'market_place'
  });

module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM user';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        console.log('user-model',id)
        let sql = 'SELECT id,name,email FROM user WHERE id = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    selectByEmail : async (email,next)=>{
        let sql = 'SELECT * FROM user WHERE email = ?'
        db.query(sql,email,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (user,next)=>{
        let sql = 'INSERT INTO user SET ?'
        db.query(sql,user,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,{nom,email},next)=>{
        let sql = `UPDATE user SET nom=?, email=? WHERE id=?`

        db.query(sql,[nom,email,id],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM user WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}