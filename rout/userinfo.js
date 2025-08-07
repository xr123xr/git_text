const express = require('express')
const router = express.Router()

const userinfo_handle = require('../router_handle/userinfo')

router.get('/userinfo',userinfo_handle.getuserinfo)

router.post('/userinfo',userinfo_handle.updateinfo)

router.post('/update/avatar',userinfo_handle.updateAvatar)

module.exports = router