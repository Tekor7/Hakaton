const asyncHandler = require('express-async-handler')
const con = require('../config/db')

const getTotal = asyncHandler(async (req,res) => {
    const sql = `SELECT sum FROM totals WHERE name = "${req.body.name}";`
    con.query(sql, (err,result,fields) => {
        if(err)throw new Error(err.message)
        res.send(result.sum)
    })
})

const addTotal = asyncHandler( async (category) => {
    const sql = `INSERT INTO totals (name) VALUES ("${category.name}");`
    con.query(sql,(err,result) => {
        if(err)throw new Error(err.message)
        console.log(result)
    })
})
const addSum = asyncHandler( async (money) => {
    const sql = `SELECT sum FROM totals WHERE name = "${money.name}";`
    con.query(sql,(err,result,fields) => {
        if(err)throw new Error(err.message)
        console.log(result[0].sum)
        const sql1 = `UPDATE totals SET sum = ${parseInt(result[0].sum) + parseInt(money.sum)} WHERE name = "${money.name}";`
        con.query(sql1, (error,result1,fields1) => {
            if(error)throw new Error(error.message)
            //res.send(result1);
        })
    })
})

const updateTotal = asyncHandler(async (req,res) => {
    addSum({
        name : req.body.name,
        sum: req.body.add
    })
    // const sql = `SELECT sum FROM totals WHERE name = ${req.body.name};`
    // con.query(sql,(err,result,fields) => {
    //     if(err)throw new Error(err.message)
    //     const sql1 = `UPDATE totals SET sum = ${result.sum + req.body.add} WHERE name = ${req.body.name};`
    //     con.query(sql1, (error,result1,fields1) => {
    //         if(error)throw new Error(error.message)
    //         res.send(result1);
    //     })
    // })
})
module.exports = {
    getTotal,
    updateTotal,
    addSum,
    addTotal
}