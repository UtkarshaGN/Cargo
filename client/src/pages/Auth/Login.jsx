import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../store/features/authSlice'
export default function Login() {

  let[email, setEmail] = useState('')
  let[password, setPassword] = useState('')

  const navigation = useNavigate() 

  //redux
  const dispatch = useDispatch()
const {error, success} = useSelector(state =>state.auth)


//redux
//lifecycle methods
useEffect(()=>{
  if(success){

    setEmail("")
    setPassword("")
    toast.success("Login sucessfully")
    navigation("/cars")
  }
  if(error){
    toast.error(error)
  }
}, [dispatch,navigation, success, error])

  let handleSubmit = (e) =>{
    e.preventDefault()
      if(!email || !password){
        return toast.error("Plase fill all the fields")
      }
      //console.log("auth form data", email+password)
     

      //redux code
        dispatch(login({password,email}))
        dispatch(reset())
    
    }

  return (
    <main className="mx-auto  min-h-[620px] max-w-7xl  px-5 py-12  lg:px-12 lg:py-16">
      <section className="mx-auto w-full max-w-md">
        <Link to="/" className="mb-9 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-teal-700">
          <span aria-hidden="true" className="text-lg">&#8592;</span> Home
        </Link>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">Welcome back</p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">Log in to Cargo.</h1>
        <p className="mt-4 text-base leading-7 text-gray-600">Pick up where your next drive begins.</p>

        <form className="mt-9 space-y-5" onSubmit={(event) => event.preventDefault()}>
          
          <div>
            <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-gray-800">Email</label>
            <input
              id="login-email"
             value={email}
              type="email"
             placeholder="you@example.com"
             onChange={(e)=> setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
            />
          </div>
          <div>
            <label htmlFor="login-name" className="mb-2 block text-sm font-medium text-gray-800">Password</label>
            <input
              id="login-name"
              value={password}
              type="text"
              onChange={(e)=>setPassword(e.target.value)}
            placeholder="Your password"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
            />
          </div>
          <button type="submit" onClick = {handleSubmit} className="w-full rounded-md bg-teal-700 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
            Log in
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          New to Cargo? <Link to="/register" className="font-semibold text-teal-700 hover:text-teal-800">Create an account</Link>
        </p>
      </section>

      
    </main>
  )
}
