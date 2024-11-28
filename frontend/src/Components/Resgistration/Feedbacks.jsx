import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa'



const Feedbacks = ({ Feedback, Name, Rating = 5, ImageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-orange-300">
            <img 
              src={ImageUrl || "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"} 
              alt={Name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{Name}</h3>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar 
                  key={index} 
                  className={`w-4 h-4 ${index < Rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative text-gray-600 italic">
          <FaQuoteLeft className="absolute top-0 left-0 text-orange-200 w-6 h-6 -mt-2 -ml-2" />
          <p className="text-base sm:text-lg leading-relaxed px-6 py-2">
            {Feedback}
          </p>
          <FaQuoteRight className="absolute bottom-0 right-0 text-orange-200 w-6 h-6 -mb-2 -mr-2" />
        </div>
      </div>
    </div>
  )
}

export default Feedbacks

