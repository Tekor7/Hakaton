const express = require('express')
const router = express.Router()
const {getMoney,setMoney} = require('../controllers/moneyController')

router.route('/').get(getMoney).post(setMoney)

module.exports = router