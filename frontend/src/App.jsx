import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Home from './pages/Home/Home'
const App = () => {
  return (
    <div className='app'>
      <NavBar/>
  
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path= '/Cart' element = {<Cart/>}/>
        <Route path= '/PlaceOrder' element = {<PlaceOrder/>}/>

      </Routes>
    </div>
  )
}

export default App
