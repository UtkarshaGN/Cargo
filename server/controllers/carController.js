//add car
import carModel from "../models/carModel.js"

export const addCar = async(req, res)=>{
    try {
        //get car data
        const{name,about,year,seats,model,milage,fuel,category,price,transmission, status}= req.body
        if(!name || !about  || !year || !seats ||!fuel || !model || !category || !milage || !price  ){
            return res.status(500).send({
                success:false,
                message:"Plaese provide all fields"
            })
        }
   //image val
   if(!req.file){
    return res.status(404).send({
        success:false,
        message:"Plesae add image file"
    })
   }
   const photoBase64 = req.file? req.file.buffer.toString('base64'):null
        //save
        const car = new carModel({name,about,year,model,seats,milage,fuel,category,price,transmission,image:photoBase64, status})
        await car.save()
        res.status(201).send({
            success:true,
            message: "Car has been created",
            car
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:" car error",
         error
        })
    }
}

//get all car

export const getAllCar = async(req,res)=>{
    try {

        const cars = await carModel.find({})
        res.status(200).send({
            success:true,
            message:"all cars",
            totalCar:cars.length,
            cars
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Car not found",
            error
        })
    }
}

//get car by id

export const getCarDetails = async(req, res) =>{
    try {
        const {id} = req.params
        if(!id){
             res.status(404).send({
            success:false,
            message:"Car not found",
            error
        })
        }

        const car = await carModel.find({_id:id})
        if(!car){
            res.status(404).send({
            success:false,
            message:"Car not found",
            car
        })

        }
        res.status(200).send({
            success:true,
            message:"Car detail api fetched",
            car
        })
        
    } catch (error) {
        console.log(error)
         res.status(500).send({
            success:false,
            message:"Car not found",
            error
        })
    }
}


//update car

export const updateCar = async(req,res)=>{
    try {
        const {id} = req.params
        if(!id){
            res.status(404).send({
            success:false,
            message:"Invalid credential",
            })
        }
      const data = req.body
        const car = await carModel.findByIdAndUpdate(id, {$set:data}, {returnOriginal:false})
         res.status(200).send({
            success:true,
            message:"Cardetails has been changes",
            car
            })
        
    } catch (error) {
         console.log(error)
         res.status(500).send({
            success:false,
            message:"Car not found",
            error
        })
    }
}

//delete car

export const deleteCar = async(req,res)=>{
    const {id} = req.params
    try {
        if(!id){
            res.status(404).send({
                success:false,
                message:"Car id not found"
            })
        }

        const car = await carModel.findByIdAndDelete({_id:id})
        res.status(200).send({
               success:true,
                message:"Car has been deleted",
                car
        })
        
    } catch (error) {
         console.log(error)
         res.status(500).send({
            success:false,
            message:"Car not found",
            error
        })
    }
}