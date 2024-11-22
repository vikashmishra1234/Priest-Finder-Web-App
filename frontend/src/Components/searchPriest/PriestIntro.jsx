import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPhoneAlt, FaWhatsapp, FaStar } from "react-icons/fa"

const PriestIntro = ({ priest, profile }) => {
  const navigate = useNavigate()

  return (
    <div className="max-w-4xl mx-auto mb-8 mt-8 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-64"
            src={priest.Profile || "https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
            alt={`${priest.Name}'s profile`}
          />
        </div>
        <div className="p-8 md:flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <p className="uppercase tracking-wide text-sm text-orange-600 font-semibold">Verified Priest</p>
              <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{priest.Name}</h2>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-4 h-4 md:w-5 md:h-5" />
              ))}
              <span className="ml-2 text-gray-600 text-sm md:text-base">({priest.Invites} invites)</span>
            </div>
          </div>
          
          <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl">
            {priest.Bio ? (priest.Bio.length > 150 ? `${priest.Bio.slice(0, 150)}...` : priest.Bio) : 'Experienced in conducting various religious ceremonies and rituals.'}
          </p>
          
          <div className="mt-6 flex items-center text-gray-700 text-base md:text-lg lg:text-xl">
            <FaPhoneAlt className="w-5 h-5 mr-2 text-orange-500" />
            <span>+91 {priest.Phone}</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-between">
            {!profile ? (
              <button
                onClick={() => navigate(`/priest?priestId=${priest._id}`)}
                className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white text-base md:text-lg font-semibold rounded-full hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                View Full Profile
              </button>
            ) : (
              <>
                <a
                  href={`tel:${priest.Phone}`}
                  className="w-full sm:w-auto mb-4 sm:mb-0 px-6 py-3 bg-blue-500 text-white text-base md:text-lg font-semibold rounded-full hover:bg-blue-600 transition duration-300 ease-in-out flex items-center justify-center"
                >
                  <FaPhoneAlt className="mr-2" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${priest.Whatsapp}`}
                  className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white text-base md:text-lg font-semibold rounded-full hover:bg-green-600 transition duration-300 ease-in-out flex items-center justify-center"
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

