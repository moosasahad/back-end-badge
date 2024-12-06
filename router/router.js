const express = require('express')
const { todoinput, deletetodo, viwetodo, changestste } = require('../controller/tood')

const routers = express.Router()

routers
    .post('/',todoinput)
    .get('/viwetodo',viwetodo)
    .delete('/delete',deletetodo)
    .get('/change',changestste)

module.exports=routers