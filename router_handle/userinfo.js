const db = require('../db/index')




exports.getuserinfo = (req,res)=>{
    const sql = 'select id, usename, nickname, email,user_pic from ev_user where id=?'

    db.query(sql,req.user.id,(err,results)=>{
        
        if(err) return res.cc(err)
        
        if(results.length!==1) return res.cc('獲取用戶信息失敗')

        res.send({
            status:0,
            message:'獲取用戶信息成功',
            data:results[0]
        })
    })
    }

exports.updateinfo = (req,res)=>{
    const sql = 'update ev_user set ? where id=?'
    db.query(sql,[req.body,req.body.id],(err,results)=>{
        
        if(err) return res.cc(err)

        if(results.affectedRows!==1) return res.cc('更新用戶信息失敗')

        res.send('更新成功,0')
    })
}

exports.updateAvatar = (req,res)=>{
    const sql = 'update ev_user set user_pic=? where id=?'
    db.query(sql,[req.body.avatar,req.user.id],(err,results)=>{
        if(err) return res.cc(err)
        
        if(results.affectedRows!==1) return res.cc('更新數據失敗')
        
        res.cc('更新成功',0)
    })
}