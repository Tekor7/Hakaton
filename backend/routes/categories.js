const express = require('express')
const router = express.Router()
const {getCategory,addCategory,updateCategory,deleteCategory,getCategoriesNames} = require('../controllers/categoryController')

router.route('/').get(getCategory).post(addCategory)
router.route('/:name').put(updateCategory).delete(deleteCategory)
router.get('/all',getCategoriesNames)
module.exports = router