import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import { register, reset } from '../../store/features/authSlice'

export default function Register() {
  let[name, setName] = useState('')
  let[email, setEmail] = useState('')
  let[phone, setPhone] = useState('')
  let[password, setPassword] = useState('')


  const navigation = useNavigate()
  const dispatch = useDispatch()
const {error, success} = useSelector(state =>state.auth)

useEffect(()=>{
  if(success){
setName('')
      setEmail('')
      setPhone('')
      setPassword('')
      navigation('/login')
      toast.success("Registration success")
  }

  if(error){
    toast.error(error)
  }
}, [dispatch,navigation, success, error])


  const handleSubmit =(e) =>{
    e.preventDefault()
   
      if(!name|| !phone || !email || !password){
        return toast.error("Please fill the all fields")
      }
      //console.log('auth form data', name + email + password + phone)
      
      dispatch(register({name,password,phone,email}))
      dispatch(reset())
   
  }
  return (
    <main className="mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">
      <section className="mx-auto w-full max-w-md lg:mx-0">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">Get started with Cargo</p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">Your next drive starts here.</h1>
        <p className="mt-4 text-base leading-7 text-gray-600">Create an account to find a car that fits your plans.</p>

        <form className="mt-9 space-y-5" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-800">Name</label>
            <input
              id="name"
              
              type="text"
              value ={name}
              onChange={(e)=>setName(e.target.value)}
               className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-800">Email</label>
            <input
              id="email"
             
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             
          
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-800">Phone</label>
            <input
              id="phone"
             
              value={phone}
              onChange={(e) =>setPhone(e.target.value)}
             
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-800">Password</label>
            <input
              id="password"
           
              value={password}
              onChange={(e) =>setPassword(e.target.value)}
            
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="w-full rounded-md bg-teal-700 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
            Sign up
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Already have an account? <Link to="/login" className="font-semibold text-teal-700 hover:text-teal-800">Log in</Link>
        </p>
      </section>

      <aside className="relative min-h-[340px] overflow-hidden rounded-lg bg-gray-900 sm:min-h-[440px] lg:min-h-[540px]">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85"
          alt="A sports car on a mountain road"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-200">Find your way</p>
          <h2 className="mt-2 max-w-sm text-3xl font-bold leading-tight">The right car makes every trip better.</h2>
        </div>
      </aside>
    </main>
  )
}
