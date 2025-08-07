const fs = require("fs")
fs.appendFile('./123.txt','i i i ',err=>{
    if(err){
        return console.log('寫入失敗');
        
    }
    console.log('成功');
    
})