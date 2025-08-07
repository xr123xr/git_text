
const mysql = require("mysql2")

const db = mysql.createPool({
    host:'127.0.0.1',
    port:'8000',
    user:'root',
    password:'admin123',
    database:'my_db'
})
const user = {usname:'doi',password:'ef329jffj'}
const sqlstr = 'insert into users set ?'
db.query(sqlstr, user, (err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows !=0){
        console.log('打印成功');
        
    };
    
    
})
// const sqlstr = 'SELECT * from users'
// db.query(sqlstr,(err,results) =>{
//     if(err) return console.log(err.message);

//     console.log(results);
    
    
// })

// db.query('select 1',(err,results) =>{
//     if(err) return console.log(err.message);

//     console.log(results);
    
// })