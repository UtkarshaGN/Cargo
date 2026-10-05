import userModel from '../models/userModel.js'
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken"

//register
export const register = async(req, res)=>{
try {
    const{name,email,phone,password} = req.body

    //validation
    if(!name | !email | !phone | !password){
        return res.status(400).send({
            success:false,
            message:'Please provide all fields'
        })
    }
    //existing user check
    const existinguser = await userModel.findOne({email})
    if(existinguser){
        return res.status(500).send({
            success:false,
            message:"User already exist"
        })
    }


    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)

    //save user
    const user = new userModel({name,email,password:hashedPassword,phone})
    await user.save()
    user.password = undefined
    res.status(201).send({
        success:true,
        message:'User created',
        user
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message:'Error in register',
        error
    })
}
}

//Login

export const userLogin = async (req, res) => {
    try {

        const { email, password } = req.body

        // Validation
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Please fill all fields"
            })
        }

        // Find user
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            })
        }

        // Password check
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invalid credentials"
            })
        }

        // Generate JWT token
        const token = JWT.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        // Remove password from response
        user.password = undefined

        return res.status(200).send({
            success: true,
            message: "Login successfully",
            token,
            user
        })

    } catch (error) {
        console.log(error)

        return res.status(500).send({
            success: false,
            message: "Login error"
        })
    }
}

//update user

export const updateUser = async(req, res) =>{
    try {
        const {id} = req.params
if(!id){
    return res.status(404).send({
        success:false,
        message:"user not found"
    })
}
const data = req.body
const user = await userModel.findByIdAndUpdate(id, {
    $set:data
}, {returnOriginal:false})
return res.status(200).send({
    success:true,
    message: "User has been updated",
    user
})
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"User not found",
            error
        })
    }
}