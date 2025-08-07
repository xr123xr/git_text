const fs = require('fs')
fs.watchFile('./123.txt','3213',function(err){
    console.log(err);
    
})
