const express = require('express')
const app = express()
const user = require('./router')


app.use(express.json())

app.use('/user', user)

app.listen(3000)