import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Footer from './components/footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
const App = () => {
  const [showLogin,setShowLogin] = useState(true)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
  
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path= '/Cart' element = {<Cart/>}/>
        <Route path= '/PlaceOrder' element = {<PlaceOrder/>}/>

      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
