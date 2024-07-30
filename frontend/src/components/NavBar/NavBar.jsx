import React, { useContext, useState } from 'react'
import './NavBar.css';
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreConrext';

const NavBar = ({setShowLogin}) => {
    const [menu, setmenu] = useState("home");
    const {   getTotalCartAmount} =useContext(StoreContext)
    
  return (
    <div  className='navbar'>
      <Link to  ='/'>  <img src={assets.logo} alt="" className='logo'/></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setmenu("home")} className={menu === "home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu === "menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setmenu("mobile-app")} className={menu === "mobile-app"?"active":""}>mobile App</a>
            <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            <div className="navbar-search-icon">
               <Link to='/cart'><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#000000"><path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg></Link>

                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
      
    </div>
  )
}

export default NavBar
