const express = require('express')

const router = express.Router()

const artCate_handle = require('../router_handle/article')

router.post('/add',artCate_handle.addArticle)

module.exports = router