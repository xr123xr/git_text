const fs = require('fs')

fs.readFile('./123.txt','utf-8',function(err,dats){
    if(err){
        return console.log(讀取失敗+err.message);
        
    };
    console.log('讀取成功'+ dats);
    
    
})