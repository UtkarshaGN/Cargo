
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Cars from './pages/Car/Car'
import Footer from './components/Footer'
import Header from './components/Header'
import  { Toaster } from 'react-hot-toast';
import CarDetails from './pages/Car/CarDetails'
function App() {
  
  return (
    <>
    <Toaster />
    <Header />
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
      <Route path='/contact' element ={<Contact/>}></Route>

{/*auth*/}
      <Route path='/login' element = {<Login/>}></Route>
      <Route path='/register' element = {<Register/>}></Route>

      <Route path = '/cars' element = {<Cars/>}></Route>
      <Route path = '/cars/:id' element ={<CarDetails/>}></Route>

     </Routes>
     <Footer/>
    </>
  )
}

export default App
