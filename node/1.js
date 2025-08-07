const { log } = require('console')
const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer()

server.on('request',(req,res) =>{
    if(req.url==='/index.html'){
      fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
        if(err){
            console.dir(err);
            
        }else{
            res.setHeader('Content-type','text/html;charset=utf-8')    
            res.end(data.toString())
        }
      }
    
    )}
    
    
})

server.listen(9000,()=>{
    console.log('啟動服務成功');
    
})
