const express = require('express')
const { urlencoded } = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const port = 8000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/money',require('./routes/money'))
app.use('/categories',require('./routes/categories'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))