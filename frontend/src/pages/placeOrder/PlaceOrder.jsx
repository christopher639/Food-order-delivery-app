import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreConrext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
   <div>
     <form className='place-order'>
      <div className="place-order-left">
      <p className="title">
        Delivery Information
      </p>
      <div className="multi-fields">
        <input type="text" placeholder='First Name'  required/>
        <input type="text"  placeholder=' Last Name' required/>
      </div>
      <input type="email" placeholder='email address'  required/>
      <input type="text"  placeholder='Street' required/>
       

      <div className="multi-fields">
        <input type="text" placeholder='City'  required/>
        <input type="text"  placeholder=' State' required/>
      </div>

      <div className="multi-fields">
        <input type="text" placeholder='Zip code'  required/>
        <input type="text"  placeholder=' County' required/>
      </div>
      <input type="number"  placeholder='Phone' />
      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>Ksh  {getTotalCartAmount()}</p>
                </div>
       <hr />
                <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>Free</p>
                </div>
       <hr />

                <div className="cart-total-details">
                <b>Total</b>
                <b>Ksh  {getTotalCartAmount()}</b>
                </div>
              
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>

      </div>
      
    </form>
   </div>
  )
}

export default PlaceOrder
