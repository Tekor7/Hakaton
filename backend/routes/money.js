const express = require('express')
const router = express.Router()
const {getMoney,setMoney,countNetWorth} = require('../controllers/moneyController')

router.route('/').get(getMoney).post(setMoney)
router.get('/networth',countNetWorth)
module.exports = router