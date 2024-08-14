import React, { useState } from 'react'
import logo from '../assets/logo.png'
import '../css/navbar.css'
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import profile from '../assets/profile.png';
const Navbar = () => {
  
  return (
    <>
      <div className="navbar-container">
        <div className="nav-left">
            <a href="/"><img src={logo} alt="Logo" /></a>
        </div>
        <div className="nav-mid">
            <div className="nav-search-input">
                <input type="text" placeholder='Search here...'/>
                <FaSearch color='#ffffff' style={{cursor:'pointer'}}/>
            </div>
            <ul className='nav-list-container'>
                <li><a href="/">Home</a></li>
                <li><a href="/who-we-are">Nearest NGOs</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/food-donation">Donation</a></li>
            </ul>
        </div>
        <div className="nav-right">
            <a href="#"><CiShoppingCart color='#ffffff' size={40}/></a>
            <a href="/profile"><img src={profile} alt="profile" /></a>
        </div>
      </div>
    </>
  )
}

export default Navbar
