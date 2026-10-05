import mongoose from 'mongoose'

export const carSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Car name is required"]
    },
     model:{
        type:String,
        required:[true, "model name is required"]
    },
      year:{
        type:String,
        required:[true, "Car year is required"]
    },
      category:{
        type:String,
       default:"sedan"
    },
     fuel:{
        type:String,
        default:"petrol"
    },
      seats:{
        type:Number,
        default:4
    },
       milage:{
        type:Number,
      default:10,
    },
       price:{
        type:Number,
       default:1000
    },
       
       about:{
        type:String,
        required:[true, "Car description"]
    },
       image:{
        type:String,
        
    },
       transmission:{
        type:Boolean,
       default:false
    },
        status:{
        type:Boolean,
       default:false
    },
}, {timestamps:true})

const carModel = mongoose.model('car', carSchema)

export default carModel