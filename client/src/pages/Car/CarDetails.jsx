import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import CarsData from '../../data/carsData.json'
import toast from 'react-hot-toast'
import BookingModel from '../../components/BookingModel'
import { useDispatch, useSelector } from 'react-redux'
import { getCarDetails } from '../../store/features/carSlice'

export default function CarDetails() {

    const { id } = useParams()
    //click on car image it will goes on correct data like if i click on 1 it should go on 1img , if if click on 2 it should go 2
    let [carDetails, setCarDetails] = useState('')
    let [loading, setLoading] = useState(false)
    const user = true

    const {cars} = useSelector(state=>state.car)
    const dispatch = useDispatch()
    //booking pop up

    let[show, setShow] = useState(false)
    let[pickupDate,setPickupDate ] =useState(new Date().toISOString().split('T')[0])
    let[returnDate, setReturnDate] = useState(new Date().toISOString().split('T')[0])
    
    //booking function
   const handleBooking =() =>{
        toast.success("Booking confirmed")
        setShow(false)
    }
    
    //find card data
    useEffect(() => {
        const getCardInfo = async () => {
            setLoading(true)
            try {
            dispatch(getCarDetails(id));
            if(cars){
                const carInfo  = cars?.find((car) =>car?._id ===id)
                setCarDetails(carInfo)
            }
                //frontend logic
               // const carInfo = CarsData.find((car) => car.id === parseInt(id))
                //if (carInfo) {
               //     setCarDetails(carInfo)
               // }

                //setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getCardInfo()
    }, [id, cars, dispatch])
    console.log(carDetails) // get cars data

//show data
    return (
        <>
        
            {loading ? <h3 className='text-center'>Loading</h3> : (
                <main className="min-h-[70vh] bg-[#f4f5f1] px-5 py-10 text-[#17211c] sm:px-8 sm:py-16 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-800">
                            <span className="h-px w-8 bg-teal-700" />
                            Cargo / Vehicle details
                        </p>

                        <section className="grid overflow-hidden border border-[#d9ded9] bg-white shadow-sm lg:grid-cols-2">
                            <div className="relative min-h-[300px] bg-[#e8ede8] sm:min-h-[440px]">
                                <img
                                    
                                     src={`data:image/png;base64,${carDetails?.image}`} 
                                    alt={carDetails?.['name '] || 'Car'}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                <span className="absolute left-5 top-5 bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-800 sm:left-7 sm:top-7">
                                    {carDetails?.Category}
                                </span>
                            </div>

                            <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12 lg:px-12">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">
                                    {carDetails?.Year} · {carDetails?.model}
                                </p>
                                <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
                                    <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                        {carDetails?.['name ']}
                                    </h1>
                                    <p className="pt-1 text-right">
                                        <span className="block text-2xl font-semibold tracking-tight">
                                            {carDetails?.price}
                                        </span>
                                        <span className="text-sm text-[#65716a]">per day</span>
                                    </p>
                                </div>

                                <div className="mt-8 border-t border-[#e3e7e3] pt-6">
                                    <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#59625d]">
                                        About this car
                                    </h2>
                                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#59625d] sm:text-base">
                                        {carDetails?.about}
                                    </p>
                                </div>

                                <div className="mt-8 grid grid-cols-2 border-l border-t border-[#e3e7e3]">
                                    <div className="border-b border-r border-[#e3e7e3] px-4 py-4 sm:px-5">
                                        <p className="text-xs uppercase tracking-[0.14em] text-[#778079]">Category</p>
                                        <p className="mt-2 font-medium">{carDetails?.Category}</p>
                                    </div>
                                    <div className="border-b border-r border-[#e3e7e3] px-4 py-4 sm:px-5">
                                        <p className="text-xs uppercase tracking-[0.14em] text-[#778079]">Year</p>
                                        <p className="mt-2 font-medium">{carDetails?.Year}</p>
                                    </div>
                                    <div className="border-b border-r border-[#e3e7e3] px-4 py-4 sm:px-5">
                                        <p className="text-xs uppercase tracking-[0.14em] text-[#778079]">Seats</p>
                                        <p className="mt-2 font-medium">{carDetails?.seats} passengers</p>
                                    </div>
                                    <div className="border-b border-r border-[#e3e7e3] px-4 py-4 sm:px-5">
                                        <p className="text-xs uppercase tracking-[0.14em] text-[#778079]">Fuel</p>
                                        <p className="mt-2 font-medium">{carDetails?.fuel}</p>
                                    </div>
                                    <div className="border-b border-r border-[#e3e7e3] px-4 py-4 sm:px-5">
                                        <p className="text-xs uppercase tracking-[0.14em] text-[#778079]">Mileage</p>
                                        <p className="mt-2 font-medium">{carDetails?.milage}</p>
                                    </div>
                                    <div className="border-b border-r border-[#e3e7e3] px-4 py-4 sm:px-5">
                                        <p className="text-xs uppercase tracking-[0.14em] text-[#778079]">Model</p>
                                        <p className="mt-2 font-medium">{carDetails?.model}</p>
                                    </div>
                                    <div className="border-b border-r border-[#e3e7e3] px-4 py-4 sm:px-5">
                                        <p className="text-xs uppercase tracking-[0.14em] text-[#778079]">Transmission</p>
                                        <p className="mt-2 font-medium">{carDetails?.transmission?"Automatic":"Manual"}</p>
                                    </div>
                                </div>
                                    <h2>Price : ${carDetails?.price} - per day</h2>
                                    {!user?(
                                    <Link to={'/login'}>Please login to Book</Link>):(
                                        <button onClick={()=>setShow(!show)}  className='mt-4 rounded-md bg-teal-600 px-4 py-2 text-white transition-colors hover:bg-teal-700'>
                                            
                                            Book Now</button>
                                    
                                    )}
                                    
                            </div>

                        
                        </section>
                    </div>

                    {/*Booking modal */}
                    {
                        show && <BookingModel 
                        show ={show}
                        setShow = {setShow}
                        price={carDetails?.price}
                        setPickupDate = {setPickupDate}
                        returnDate = {returnDate}
                        setReturnDate = {setReturnDate}
                        handleBooking = {handleBooking}/>
                    }
                </main>

            )}
        </>
    )
}
