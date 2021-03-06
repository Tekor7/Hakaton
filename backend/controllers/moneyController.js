const asyncHandler = require('express-async-handler')
const con = require('../config/db')
const {insertIntoCategory} = require('./categoryController')
const getMoney = asyncHandler(async (req,res) => {
    const sql = "SELECT * FROM Money;"
    con.query(sql, (err,result,fields) => {
        if(err)throw new Error(err.message)
        console.log(result)
        res.send(result)
    })    
})

const setMoney = asyncHandler(async (req,res) => {
    const sql = `INSERT INTO Money (sum,type,date) VALUES (${req.body.sum},"${req.body.type}",CURDATE());`
    con.query(sql, (err,result) => {
        if(err)throw new Error(err.message)
        insertIntoCategory({name: req.body.type,sum: req.body.sum})
        res.send(result)
    })
})
const countNetWorth = asyncHandler(async (req,res) => {
    const sql = `SELECT SUM(sum) AS total FROM totals;`
    con.query(sql, (err,result,fields) => {
        if(err)throw new Error(err.message)
        console.log(result[0].total)
        console.log(`Sum was calculated and sent ${result[0].total}`)
        res.send({networth: result[0].total})
    })
})
const getsortedByMoney = asyncHandler(async (req,res) => {
    const sql = `SELECT * FROM money ORDER BY sum DESC`;
    con.query(sql,(err,result,fields) => {
        if(err)throw new Error(err.message)
        console.log("Sorted results retrieved")
        console.log(result)
        res.send(result)
    })
})
module.exports = {
    getMoney,
    setMoney,
    countNetWorth,
    getsortedByMoney
}