// auth.js
import jwt from 'jsonwebtoken';

// 定義密鑰和有效載荷
const secretKey = 'your_secret_key'; // 請使用安全的密鑰

// 生成 token 的函數
export function generateToken(usname, password) {
    const payload = {
        usname: usname, // 用戶 ID 或其他識別信息
        password: password
    };

    // 設定 token 的有效期
    const options = {
        expiresIn: '1h' // token 有效期為 1 小時
    };

    // 生成 token
    const token = jwt.sign(payload, secretKey, options);
    console.log('生成的 Token:', token);
    return token;
}
