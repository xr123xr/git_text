const express = require('express')

const router = express.Router()

const artCate_handle = require('../router_handle/artcate')

router.get('/cates',artCate_handle.getArtCates)

router.post('/addcates', artCate_handle.addArticleCate);

router.get('/delete/:id', artCate_handle.deleteCateByid);

router.get('/cates/:id',artCate_handle.getArtCatesByid)

router.get('/updatecart',artCate_handle.updateCateByid)


module.exports = router