import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"
import mandirLogo from '../../assets/mandir.png'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [isPriestLoggedIn, setIsPriestLoggedIn] = useState(false)

  useEffect(() => {
    const priestToken = localStorage.getItem("priestToken")
    setIsPriestLoggedIn(!!priestToken)
  }, [])

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/register', label: isPriestLoggedIn ? 'My Profile' : 'Become Priest' },
    { to: '/priest/find', label: 'Find Priest' },
    { to: '/restaurent', label: 'Best Restaurant' },
   
  ]

  return (
    <header className="bg-[#ff8400] shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={mandirLogo} alt="Mandir Logo" className="h-14 w-[146px]" />
          </div>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-orange-800 hover:text-orange-600 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setShow(!show)}
              className="text-orange-800 hover:text-orange-600 focus:outline-none focus:text-orange-600"
            >
              {show ? (
                <RxCross2 className="h-8 w-8" />
              ) : (
                <GiHamburgerMenu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${show ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-orange-800 hover:bg-orange-200 block px-3 py-2 rounded-md text-xl font-medium"
              onClick={() => setShow(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar

