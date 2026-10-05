import express from 'express'
import { register, userLogin } from '../controllers/userController.js'


const router = express.Router()


//register -post
router.post('/register', register)

//Login
router.post("/login", userLogin)

export default router