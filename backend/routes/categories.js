const express = require('express')
const router = express.Router()
const {getCategory,addCategory,updateCategory,deleteCategory} = require('../controllers/categoryController')

router.route('/').get(getCategory).post(addCategory)
router.route('/:name').put(updateCategory).delete(deleteCategory)

module.exports = router