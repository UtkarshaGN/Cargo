import express from 'express'
import { createBooking, getAllBookings, getBookingById, updateByStatus, userBooking} from '../controllers/bookingController.js'
import { isAdmin, userAuth } from '../middleware/authMiddleware.js'

const router = express.Router()

//create booking
router.post('/create-booking', userAuth, createBooking)

//get all bookings
router.get('/get-all', getAllBookings)

//get booking details by id
router.get('/get-details/:id', userAuth, isAdmin, getBookingById)

router.patch('/update-status/:id', userAuth, isAdmin, updateByStatus)

//get user booking - get

router.get('/user-booking/:id', userAuth, userBooking)
export default router