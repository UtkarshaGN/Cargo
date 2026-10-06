//create booking

import bookingModel from "../models/bookingModel.js"
import carModel from "../models/carModel.js"
import userModel from "../models/userModel.js"

export const createBooking = async(req, res)=>{
    try {

        const{user,car,startDate, returnDate, price, totalPrice} = req.body

        if(!user ||!car ||!startDate || !returnDate || !price ||!totalPrice ){
            return res.status(500).send({
                success:false,
                message:"Plaese provide all fields"
            })
        }

        const booking = new bookingModel({user,car, startDate, returnDate, price, totalPrice})
        await booking.save()
         res.status(201).send({
            success:true,
            message: "Booking has been created",
            booking
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:true,
            message:"Car booking error",
            error
        })
    }
}

//get all booking

export const getAllBookings = async(req, res)=>{
    try {

        const booking = await bookingModel.find({})
         res.status(200).send({
            success:true,
            message: "get all booking",
            totalBooking:booking.length,
            booking
        })
        
    } catch (error) {
        console.log(error)
         res.status(500).send({
            success:true,
            message:"get all booking error",
            error
        })
    }
}

//get booking by id

export const getBookingById = async(req,res)=>{
    try {
        const{id} = req.params
        if(!id){
            return res.status(404).send({
            success:false,
            message:"Invalid credential",
            
        })
        }
        const booking = await bookingModel.findById({_id:id})
        if(!booking){
            return res.status(404).send({
            success:false,
            message:"Not booking found",
           
        })
         }
        const user = await userModel.findById({_id:booking.user})
        const car = await carModel.findById({_id:booking.car})
       res.status(200).send({
            success:true,
            message: "booking details fetched successfully",
            booking:{
                id:booking._id,
                customerName:user.name,
                phone:user.phone,
                startDate:booking.startDate,
                returnDate:booking.returnDate,
                price:booking.price,
                totalPrice:booking.totalPrice,
                status:booking.status,
                bookingTime:booking.createdAt
            }
        })
        
    } catch (error) {
        console.log(error)
         res.status(500).send({
            success:false,
            message:"get booking by id",
            error
        })
    }
}

//change booking status

export const updateByStatus = async(req, res)=>{
    try {
        const{id} = req.params
        if(!id){
            return res.status(404).send({
            success:false,
            message:"Invalid credential",
            
        })
    }
        const {status} = req.body

        const booking = await bookingModel.findByIdAndUpdate(id, {$set:{status}}, {returnOriginal:false})
         res.status(200).send({
            success:true,
            message: " booking status",
           
            booking
        })
    } catch (error) {
        console.log(error)
         res.status(500).send({
            success:false,
            message:"booking status error",
            error
        })
    }
}

//check user booking

export const userBooking = async(req, res)=>{
    try {
         const{id} = req.params
        if(!id){
            return res.status(404).send({
            success:false,
            message:"Invalid credential",
            
        })
        }
//booking check
        const user = await userModel.findById({_id:id})
        
        const booking = await bookingModel.find({user:user._id})
        //testing
        //if(!booking){
       // return res.status(404).send({
       //success:false,
       //message:"booking not found"
        //)}
        const car = await carModel.find({_id:booking[0].car})

        res.status(200).send({
            success:true,
            message:"Your booking",
            totalBooking:booking.length,
            booking
            //car:booking[0].name,
           // price:booking[0].price,
            //totalPrice:booking[0].totalPrice,
            //startDate:booking[0].startDate,
            //returnDate:booking[0].returnDate,
            //bookingTime:booking[0].createdAt,
         
        })

        
     }
    catch (error) {
         console.log(error)
         res.status(500).send({
            success:false,
            message:" user booking api error",
            error
        })
    }
}