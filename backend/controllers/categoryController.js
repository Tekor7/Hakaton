const asyncHandler = require('express-async-handler')
const con = require('../config/db')
const {getTotal,addSum,addTotal} = require('./totalsController')
const getCategory = asyncHandler(async (req,res) => {
    let sql =  `SELECT * FROM ${req.body.name}`
    if(req.body.sorted)sql += " ORDER BY sum DESC"
    sql += ";";
    con.query(sql, (err,result,fields) => {
        if(err)throw new Error(err.message)
        console.log(result)
        res.send(result)
    })    
})

const addCategory = asyncHandler(async (req,res) => {
    console.log(req.body)
    if(!req.body.name)throw new Error('Please choose a name for a category')
    const sql = `CREATE TABLE ${req.body.name} (id INT AUTO_INCREMENT PRIMARY KEY,sum INT,date DATE);`
    con.query(sql, (err,result) => {
        if(err)throw new Error(err.message)
        addTotal({name : req.body.name})
        console.log(`Category ${req.body.name} was created`)
        res.send(result)
    })
})

const insertIntoCategory = asyncHandler(async (money) => {
    const sql = `INSERT INTO ${money.name} (sum,date) VALUES (${money.sum},NOW());`
    con.query(sql,(err,result) => {
        if(err)throw new Error(err.message)
        addSum(money)
        console.log(`ura ura`)
    })
})

const updateCategory = asyncHandler(async (req,res) => {
    const sql = `ALTER TABLE ${req.body.old_name} RENAME TO ${req.body.new_name};`
    con.query(sql, (err,result) => {
        if(err)throw new Error(err.message)
        console.log(`Name of ${req.body.old_name} was changed to ${req.body.new_name}`)
    })
})

const deleteCategory = asyncHandler(async (req,res) => {
    const sql = `DROP TABLE ${req.body.name};`
    con.query(sql, (err,result) => {
        if(err)throw new Error(err.message)
        console.log(`Table ${req.body.name} was deleted`)
    })

})
const getCategoriesNames = asyncHandler(async (req,res) => {
    const sql = `SELECT (name) FROM totals;`
    con.query(sql,(err,result,fields) => {
        if(err)throw new Error(err.message)
        console.log('Totals were given')
        res.send(result)
    })
})
module.exports = {
    getCategory,
    addCategory,
    insertIntoCategory,
    updateCategory,
    deleteCategory,
    getCategoriesNames
}