import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreConrext'

const Cart = () => {
  const {cartItems,food_list,removeFromCart} =useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Delete item</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id] > 0){
            return(
              <div>
              <div className="cart-items-title  cart-items-item">
                <img src={item.image} alt="" />
                 <p>{item.name}</p>
                 <p>Ksh  {item.price}</p>
                 <p>{cartItems[item._id]}</p>
                 <p>Ksh  {item.price*cartItems[item._id]}</p>
                 <p className='cross'>
                 <svg   onClick={()=>removeFromCart(item._id)}  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                 </p>
              </div>
              <hr />
              </div>

            )
          }

        })}
      </div>
      
    </div>
  )
}

export default Cart
