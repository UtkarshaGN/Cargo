import express from 'express'
import { addCar, deleteCar, getAllCar, getCarDetails, updateCar } from '../controllers/carController.js'
import {userAuth, isAdmin} from '../middleware/authMiddleware.js'
const router = express.Router()


//add car
router.post('/add-car', userAuth, isAdmin , addCar)

//get all cars
router.get('/all-cars', getAllCar)
router.get('/:id', getCarDetails)

router.patch('/update-car/:id',userAuth, isAdmin, updateCar)
router.delete('/delete-car/:id',userAuth, isAdmin, deleteCar)
export default router