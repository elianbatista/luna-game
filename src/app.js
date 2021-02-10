const express = require('express')
const router = require('./routes')

const app = express()
app.use(express.static(__dirname + '/public'))
app.use(router)

module.exports = app