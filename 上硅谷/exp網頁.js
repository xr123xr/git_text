const express = require('express');
const app = express(); // 正確初始化 app
app.get('/', (req, res) => {
    res.send('你好')
    })

app.listen(1221, () => {
    console.log('服務已啟動');
    })