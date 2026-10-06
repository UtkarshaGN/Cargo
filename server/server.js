import express from 'express'
import colors from 'colors'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'
import userRoutes from './routes/userRoute.js'
import carRoutes from './routes/carRoute.js'
import bookingRoutes from './routes/bookingRoute.js'
//dotenv
dotenv.config()
//database
connectDb()

const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/car', carRoutes)
app.use('/api/v1/booking', bookingRoutes)

app.get('/', (req,res)=>{
    res.status(200).send("<h1>hello</h1>")
})


//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT} in ${process.env.DEV_MODE} Mode`)
})