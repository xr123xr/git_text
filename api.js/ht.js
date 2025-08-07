const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use((req,res,next) =>{
    res.cc = function (err,status = 1){
        res.send({
           status ,
           message : err instanceof Error ? err.message : err,
        })
    }
    next()
})
app.use(express.urlencoded({extended:false}))

const expressjwt = require('express-jwt')
const config = require('../config')

app.use(expressjwt({secret:config.jwtSecretkey}).unless({path:[/^\/api/]}))

const userouter = require('../rout/router')
app.use('/api',userouter)

const userinforouter = require('../rout/userinfo')
app.use('/my',userinforouter)

const artcateRouter = require('../rout/artcate')
app.use('/my/article',artcateRouter)

const articleRouter = require('../rout/article')
app.use('/my/article',articleRouter)

app.use((err,req,res,ext)=>{
    if(err.name==='UnauthorizedError') return res.cc('驗證失敗')
    
    res.cc(err)
})


app.listen(8001,function(){
    console.log('api server running at http://127.0.0.1');
    
})