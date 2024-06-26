import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import mandir from '../../assets/mandir.png'
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <header>
      <div className='image-container'>
        <img src={mandir} alt="" />
      </div>
      <nav className={`nav ${show ? 'show' : ''}`}>
        <ul>
          <li onClick={() => setShow(false)}><Link to='/'>Home</Link></li>
          <li onClick={() => setShow(false)}><Link to='/register'>{localStorage.getItem("priestToken") ? 'My Profile' : 'Become Priest'}</Link></li>
          <li onClick={() => setShow(false)}><Link to='/priest/find'>Find Priest</Link></li>
          <li onClick={() => setShow(false)}><Link to='/restaurent'>Best Restaurant</Link></li>
          <li onClick={() => setShow(false)}>Hotel</li>
          <li onClick={() => setShow(false)}>Contact Us</li>
        </ul>
      </nav>
      <div className="ham">
        {show ? 
          <RxCross2 color='white' cursor='pointer' onClick={() => setShow(!show)} /> : 
          <GiHamburgerMenu color='white' cursor='pointer' onClick={() => setShow(!show)} />
        }
      </div>
    </header>
  )
}

export default Navbar