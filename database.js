// const { Schema, Mongoose } = require('mongoose')

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ram:yTYBba4ejYmm5hTS@express.homstct.mongodb.net/').then(()=>
{console.log('connected succsefully...')}).catch((error)=>{console.log(error)})


Schema = mongoose.Schema({
    name: String,
    mail: String,
    age: Number
})
// console.log('schema created')

StudentModel = mongoose.model('Student', Schema)

module.exports = StudentModel
