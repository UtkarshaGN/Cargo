import React, { useEffect } from 'react'
import CarsData from "../../data/carsData.json"
import CarCard from '../../components/CarCard'
import { getAllCars } from '../../store/features/carSlice'
import {useDispatch, useSelector} from 'react-redux'
export default function Car() {

  const dispatch = useDispatch()
  const {cars} = useSelector((state)=>state.car)

  useEffect(()=>{
    const getCars = ()=>{
      try {
        dispatch(getAllCars())
      } catch (error) {
        console.log(error)
      }
    };
    getCars()

  },[dispatch])
  return (
    <main className="min-h-[70vh] bg-[#f4f5f1] px-5 py-12 text-[#17211c] sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-9 border-b border-[#d9ded9] pb-7 sm:mb-12 sm:flex sm:items-end sm:justify-between sm:gap-8 sm:pb-9">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-800">
              <span className="h-px w-8 bg-teal-700" /> Cargo / The collection
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Explore our <span className="text-teal-700">car collection.</span>
            </h1>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[#59625d] sm:mt-0 sm:text-base">
            Click on a car to see its specifications and price.
          </p>
        </header>
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {cars?.map(car =>(
          <CarCard car ={car} key ={car?._id} />
        ))}
        </div>
      </div>
    </main>
  )
}
