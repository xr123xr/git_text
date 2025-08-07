const db = require('../db/index')

exports.getArtCates = (req,res)=>{
    
    const sql = 'select * from ev_artide_cate where is_delate=0 order by id asc'

    db.query(sql,(err,results)=>{
        if(err) return res.cc(err)
        
        res.send({
            status:0,
            message:'獲取文章數據分類成功',
            data:results, 
        })
    })
    
}

exports.addArticleCate = (req,res)=>{
    
    const sql = 'select * from ev_artide_cate where name=? or alias=?'

    db.query(sql,[req.body.name,req.body.alias],(err,results)=>{
        if(err) return res.cc(err)

        if(results.length===2) return res.cc('分類名稱與分類別名被占用,請更換')   
            
        if(results.length===1 && results[0].name===req.body.name && results[0].alias===req.body.alias)
        
        return res.cc('分類名稱與分類別名被占用,請更換')
        
        if(results.length===1 && results[0].name===req.body.name )
        
        return res.cc('分類名稱被占用,請更換')
        
        if(results.length===1 && results[0].alias===req.body.alias)
        
        return res.cc('分類別名被占用,請更換')

        const sql = 'insert into ev_artide_cate set ?'

        db.query(sql, req.body,(err,results)=>{
            if(err) return res.cc(err)

            if(results.affectedRows!==1) return res.cc('創建文章分類失敗')

            res.cc('新增文章分類成功',0)
        })
       
     }   
)}

exports.deleteCateByid = (req,res)=>{
    
    const sql = 'update ev_artide_cate set is_delate=1 where id=? '
    db.query(sql,req.params.id,(err,results)=>{

        if(err) return res.cc(err)

        if(results.affectedRows!==1) return res.cc('刪除分類失敗')

        res.cc('刪除分類成功',0)
    })
}

exports.getArtCatesByid =(req,res)=>{
    const sql ='select * from ev_artide_cate where id=?'

    db.query(sql,req.params.id,(err,results)=>{
        if(err) return res.cc(err)
        
        if(results.length!==1) return res.cc('獲取文章分類失敗')
        
        res.send({
            status:0,
            message:'獲取文章分類成功',
            dat:results[0]
        })
    })
}

exports.updateCateByid = (req,res)=>{
    res.send('ok')
}