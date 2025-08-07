const db = require('../db/index'); // 引入數據庫連接模組
const bcrypt = require('bcryptjs'); // 引入 bcrypt 模組，用於密碼加密
const jwk = require('jsonwebtoken')
const config = require('../config')
// 註冊用戶的函數
exports.reguser = (req, res) => {
    const pase = req.body; // 獲取請求中的用戶輸入
    console.log(pase); // 輸出請求的 body 內容，方便調試

    // 檢查用戶名和密碼是否存在
    if (!pase.usename || !pase.password) {
        return res.send('帳戶或密碼不規範'); // 如果缺少用戶名或密碼，返回錯誤信息
    }

    // 構建查詢語句，檢查用戶名是否已存在
    const sqlstr = 'select * from ev_user where usename=?';
    db.query(sqlstr, pase.usename, (err, results) => {
        if (err) {
            return res.cc(err.message); // 如果查詢出現錯誤，返回錯誤信息
        }
        if (results.length > 0) {
            return res.cc('用戶名已被使用'); // 如果用戶名已存在，返回提示信息
        }

        // 使用 bcrypt 對密碼進行加密
        pase.password = bcrypt.hashSync(pase.password, 10);
        console.log(pase); // 輸出加密後的用戶信息，方便調試

        // 構建插入語句，將新用戶信息插入數據庫
        const sql = 'insert into ev_user set ?';
        db.query(sql, { usename: pase.usename, password: pase.password }, (err, results) => {
            if (err) return res.send(err.message); // 如果插入出現錯誤，返回錯誤信息
            if (results.affectedRows !== 1) return res.cc('註冊失敗,請稍後再試'); // 如果影響的行數不為1，返回註冊失敗信息
            res.send('註冊成功'); // 返回註冊成功信息
        });
    });
};

// 登錄用戶的函數
exports.long = (req, res) => {
    const pase = req.body; // 獲取請求中的用戶輸入
    const sql = 'select * from ev_user where usename=?'; // 構建查詢語句
    db.query(sql, [pase.usename], (err, results) => {
        if (err) return res.cc(err.message); // 如果查詢出現錯誤，返回錯誤信息
        
        // 如果查詢結果不為1，表示用戶未註冊
        if (results.length !== 1) return res.cc('請先註冊');

        // 使用 bcrypt 比較用戶輸入的密碼與數據庫中的密碼
        const com = bcrypt.compareSync(pase.password, results[0].password);
        if (!com) return res.cc('密碼不正確'); // 如果密碼不匹配，返回錯誤信息
        
         // 返回登錄成功信息
        const user = {...results[0],password:'',user_pic:''}
        
        const tokenstr = jwk.sign(user,config.jwtSecretkey,{expiresIn:config.expiresIn})
        console.log(tokenstr);
        res.send(
            {
                status:0,
                message:'登入成功',
                token:'Bearer '+ tokenstr
            }    
           );
    });

    
    
};
