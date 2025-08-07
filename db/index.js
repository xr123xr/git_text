const mysql = require('mysql2')

const db = mysql.createPool({
    host:'127.0.0.1',
    port:'8000',
    user:'root',
    password:'admin123',
    database:'my_db'

})
module.exports = db 