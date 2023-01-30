//MongoDB Model File,In Which we define MongoDB Schemas
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserDataSchema = new Schema({
    name:{
        type:String,//We Can Store String
    },
    age:{
        type:Number,//We Can Store Number
    },
    isactive:{
        type:Boolean,//We Can Store Boolean
        default:true
    },
    dob:{
        type:Date,//We Can Store Date
    },
    hobbies:[{
        type:String,//We Can Store Array of String
    }],
    address:{ //We Can Store Nested Object
        city:{
            type:String,  
        },
        state:{
            type:String
        },
    },
    familymembers:[ //We Can also Store Array of Objects
        {
            relation:{
                type:String
            },
            name:{
                type:String
            }
        }
    ]
},{timestamps:true}) //for createdAt & updatedAt

module.exports = UserData = mongoose.model('UserData',UserDataSchema)