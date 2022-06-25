const express = require('express')
const router = express.Router()
const {getCategory,addCategory,updateCategory,deleteCategory,getCategoriesNames} = require('../controllers/categoryController')
const {getTotal} = require('../controllers/totalsController')

router.route('/').get(getCategory).post(addCategory)
router.route('/:name').put(updateCategory).delete(deleteCategory)
router.route('/statistics').get(getTotal)
router.get('/all',getCategoriesNames)
module.exports = router