import express from 'express'
import { register, updateUser, userLogin } from '../controllers/userController.js'
import { userAuth } from '../middleware/authMiddleware.js'


const router = express.Router()


//register -post
router.post('/register', register)

//Login
router.post("/login", userLogin)
//update patch
router.patch('/update/:id', userAuth,updateUser)
export default router