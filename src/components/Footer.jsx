import React, { useState } from 'react'
import '../css/footer.css'
import { FaGlobe, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
const Footer = () => {
    const [email,setEmail] = useState('');
  return (
    <>
      <div className="footer-container">
        <div className="footer-details-container">
            <div className="column-container">
                <div className="sf-social-icon">
                    <a href="#"><FaInstagram color='#ffffff' size={22}/></a>
                    <a href="#"><FaGlobe color='#ffffff' size={22}/></a>
                    <a href="#"><FaTwitter color='#ffffff' size={22}/></a>
                    <a href="#"><FaYoutube color='#ffffff' size={22}/></a>
                </div>
                <div className="f-text">
                Copyright © 2020 Food delivery website <br />All rights reserved
                </div>
            </div>
            <div className="column-container">
                <h3>Company</h3>
                <ul className="f-list-container">
                    <li><a href="">About us</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact us</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                </ul>
            </div>
            <div className="column-container">
            <h3>Support</h3>
                <ul className="f-list-container">
                    <li><a href="">Help center</a></li>
                    <li><a href="">Term of service</a></li>
                    <li><a href="">Legal</a></li>
                    <li><a href="">Privacy policy</a></li>
                    <li><a href="">Status</a></li>
                </ul>
            </div>
            <div className="column-container">
                <h3>Stay up to date</h3>
                <div className="f-input-container">
                    <input type="email" placeholder='Your Email Address'/>
                    <BsSend color='#ffffff' size={18} style={{cursor:'pointer'}}/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
