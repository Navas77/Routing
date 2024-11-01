const mongoose = require("mongoose")
const Userschema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type: String
    },
    age:{
        type: Number
    }

})
const Usermodel=mongoose.model('Routing',Userschema)
module.exports=Usermodel
  