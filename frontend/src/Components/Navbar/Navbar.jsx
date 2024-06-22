import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show,setShow] = useState(false);
  return (
    <header >
        <div className='image-container' >
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4pb4xzFU3eLsFR3PSICMXHPr6R1tgumCYrw&s" alt="image" /> */}
            <img src="/src/assets/mandir.png" alt="" />
        </div>
      { <nav className='nav' >
            <ul className={show?'open':'close'}>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/register'> {localStorage.getItem("priestToken")?'My Profile':'Rigister Yourself'} </Link></li>
                <li><Link to={'/priest/find'}>Find Priest</Link></li>
                <li><Link to='/restaurent'>Best Restaurent</Link></li>
                <li>Best Place to Stay</li>
                <li>Contact Us</li>

            </ul>
        </nav>}
            <div className="ham">
            <GiHamburgerMenu color='white' cursor={'pointer'} onClick={()=>setShow(!show)}  />
            </div>
    </header>
  )
}

export default Navbar