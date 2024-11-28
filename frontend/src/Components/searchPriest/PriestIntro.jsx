import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPhoneAlt, FaWhatsapp, FaStar, FaUserTie } from "react-icons/fa"



const PriestIntro= ({ priest, profile }) => {
  const navigate = useNavigate()

  return (
    <div className="max-w-4xl  mx-auto my-8 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0 relative">
          <img
            className="h-56 w-full object-cover md:h-full md:w-72"
            src={priest.Profile || "https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
            alt={`${priest.Name}'s profile`}
          />
          <div className="absolute top-0 left-0 bg-orange-500 text-white px-3 py-1 rounded-br-lg">
            <FaUserTie className="inline-block mr-1" />
            <span className="text-sm md:text-base">Verified Priest</span>
          </div>
        </div>
        <div className="p-6 md:p-8 md:flex-grow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-0">{priest.Name}</h2>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-4 h-4 md:w-5 md:h-5" />
              ))}
              <span className="ml-2 text-gray-600 text-sm md:text-base">({priest.Invites} invites)</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4">
            {priest.Bio ? (priest.Bio.length > 150 ? `${priest.Bio.slice(0, 150)}...` : priest.Bio) : 'Experienced in conducting various religious ceremonies and rituals.'}
          </p>
          
          <div className="flex items-center text-gray-700 text-sm md:text-base lg:text-lg mb-6">
            <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5 mr-2 text-orange-500" />
            <span>+91 {priest.Phone}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            {!profile ? (
              <button
                onClick={() => navigate(`/priest?priestId=${priest._id}`)}
                className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white text-sm md:text-base font-semibold rounded-full hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                View Full Profile
              </button>
            ) : (
              <>
                <a
                  href={`tel:${priest.Phone}`}
                  className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white text-sm md:text-base font-semibold rounded-full hover:bg-blue-600 transition duration-300 ease-in-out flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <FaPhoneAlt className="mr-2" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${priest.Whatsapp}`}
                  className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white text-sm md:text-base font-semibold rounded-full hover:bg-green-600 transition duration-300 ease-in-out flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  <FaWhatsapp className="mr-2" /> WhatsApp
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriestIntro

