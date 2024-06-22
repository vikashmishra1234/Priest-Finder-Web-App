import React from 'react'
import './style.scss'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
<>
    <footer className='footer'>
<div className='footer-first'>
    <div className='icons'>
        <div className='icon'>
<a href=""><FaXTwitter /></a>
    
        </div>
        <div className='icon'>
<a href=""><FaWhatsapp color='green' /></a>
    
        </div>
        <div className='icon'>
<a href=""> <FaInstagram color=' #e1306c'  /></a>
   
        </div>
        <div className='icon'>

    <a href=""><FaLinkedin color='blue' /></a>
        </div>
    </div>
    <div className="menus ">
        <ul className='ul'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to='/restaurent'>Restaurents</Link></li>
            <li><Link to='/priest/find'>Priests</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
    </div>
</div>
<div className='footer-second'>
<h3>Contact Us:</h3>
<div className='info'>
    <a href="mailto:vikashmishra8371@gmail.com"><MdEmail size={25}/>vikashmishra8371@gmail.com</a>
    <a href="tel:+91 8979481819"><FaPhone size={22}/>+91 8979481819</a>
    <p><FaLocationArrow  size={25}/>Mathura,Uttar Pradesh India.</p>
</div>
</div>
    </footer>
<div className='copyright'>
    <h3>copyright@2024-BrajGuide.com</h3>
</div>
</>
  )
}

export default Footer