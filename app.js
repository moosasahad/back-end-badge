const express = require('express')
const mongoose = require('mongoose')
const routers = require('./router/router')
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://sahdaccoun32:moosa%40321@cluster0.dgvef.mongodb.net/todoapp")
.then(()=>{
    console.log('connected')
})
.catch((Error)=>{
    console.log("connct error",Error);
    
})

app.use(routers)



app.listen(3000,()=>{
    console.log("ruuned at 3000");
    
})