import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
{

    name:{
        type:String,
        required:[true, 'Username is required']
    },

    email:{
        type:String,
        required:[true, "Email is required"]
    },
    password:{
        type:String,
        required:[true, 'Password is required']
    },

    phone:{
        type:String,
        required:[true, "Phone no required"]
    }
    

}
)


const userModel = mongoose.model('user', userSchema)

export default userModel