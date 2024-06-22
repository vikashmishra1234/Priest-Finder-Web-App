import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import mandir from '../../assets/mandir.png'
import { RxCross2 } from "react-icons/rx";
import {motion} from 'framer-motion'
const Navbar = () => {
  const [show,setShow] = useState(false);
  return (
    <header >
        <div className='image-container' >
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4pb4xzFU3eLsFR3PSICMXHPr6R1tgumCYrw&s" alt="image" /> */}
            <img src={mandir} alt="" />
        </div>
      { <nav className='nav' >
            <motion.ul initial={{x:150}} whileInView={{x:0,position:'absolute'}} transition={{duration:.3}}  className={show?'open':'close'}>
                <li onClick={()=>setShow(false)}><Link to='/' >Home</Link></li>
                <li onClick={()=>setShow(false)}><Link to='/register'> {localStorage.getItem("priestToken")?'My Profile':'Rigister Yourself'} </Link></li>
                <li onClick={()=>setShow(false)}><Link to={'/priest/find'}>Find Priest</Link></li>
                <li onClick={()=>setShow(false)}><Link to='/restaurent'>Best Restaurent</Link></li>
                <li onClick={()=>setShow(false)}>Best Place to Stay</li>
                <li onClick={()=>setShow(false)}>Contact Us</li>

            </motion.ul>
        </nav>}
            <div className="ham">
              {
                show?<RxCross2 color='white' cursor={'pointer'} onClick={()=>setShow(!show)}  />:<GiHamburgerMenu color='white' cursor={'pointer'} onClick={()=>setShow(!show)}  />

              }

            </div>
    </header>
  )
}

export default Navbar