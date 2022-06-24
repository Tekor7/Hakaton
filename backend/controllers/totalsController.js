const asyncHandler = require('express-async-handler')
const con = require('../config/db')

const getTotal = asyncHandler(async (name) => {
    const sql = `SELECT sum FROM totals WHERE name = ${name};`
    con.query(sql, (err,result,fields) => {
        if(err)throw new Error(err.message)
        res.send(result)
    })
})

module.exports = {
    getTotal
}