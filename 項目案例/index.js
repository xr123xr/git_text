// index.js
const usname = document.querySelector('#username');
const password = document.querySelector('#password');

document.querySelector('.btn').addEventListener("click", (e) => {
    e.preventDefault();
    console.log(123);
    
    const form = document.querySelector('.form');
    const data = $(form).serializeArray(); // 使用 jQuery 的 serialize 方法
    console.log(data);

    // 驗證用戶名和密碼
    if (usname.value !== '13888888888' || password.value !== '246810') {
        return alert('用戶名或密碼錯誤');
    }

    axios({
        url: '/v1_0/authorizations',
        method: 'POST',
        data
    }).then(results => {
        console.log(results);
        // 此處可以處理成功登錄後的邏輯
    }).catch(err => {
        console.dir(err);
        location.href = 'login.html';
    });
});
