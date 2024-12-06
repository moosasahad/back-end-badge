const mongoose = require('mongoose')

const inputschema= new mongoose.Schema({
    input:{type:String,required:true},
    status:{type:String,default:true},
})

module.exports = mongoose.model('input',inputschema)