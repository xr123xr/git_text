const express = require('express')
const router = express.Router()

const rout_handle = require('../router_handle/user')

// const joi = require('joi')

const schuser = require('../schema/user')
// joi(schuser.usename) ,
router.post('/reguser',rout_handle.reguser)
router.post('/long',rout_handle.long)

module.exports=router