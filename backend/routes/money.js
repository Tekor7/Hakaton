const express = require('express')
const router = express.Router()
const {getMoney,setMoney,countNetWorth,getsortedByMoney} = require('../controllers/moneyController')

router.route('/').get(getMoney).post(setMoney)
router.get('/networth',countNetWorth)
router.get('/getsorted',getsortedByMoney)
module.exports = router