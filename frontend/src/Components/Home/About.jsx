import React from 'react'
import { FaCalendar, FaMusic, FaUsers, FaStar } from 'react-icons/fa';

const festivals = [
  "Lathmaar Holi",
  "Shri Krishna Janmashtami",
  "Radha Ashtami",
  "Kans Vadh",
  "Yam Dwitiya",
  "Hariyali Teej"
]

const About = () => {
  return (
    <div className="bg-gradient-to-b from-orange-100 to-yellow-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-orange-800 mb-8">
          The Divine Land of Mathura and Vrindavan
        </h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-orange-500">
          <div className="p-6 sm:p-8">
            <p className="text-orange-900 leading-relaxed mb-6">
              Mathura and Vrindavan, the sacred lands blessed by Lord Krishna's presence, are known for their 
              rich cultural heritage and spiritual significance. These divine places hold various lyrical 
              expressions like Sanjhee, Raaslila, Charkula, and Rasiya, embodying the love that Lord Krishna spread.
            </p>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-6">
              <h2 className="text-2xl font-semibold text-orange-800 mb-4">Celebrated Festivals</h2>
              <ul className="grid grid-cols-2 gap-3">
                {festivals.map((festival, index) => (
                  <li key={index} className="flex items-center text-orange-700">
                    <FaStar className="h-5 w-5 mr-2 text-orange-500" />
                    <span className="text-lg">{festival}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-orange-900 leading-relaxed mb-6">
              During these vibrant Braj festivals, the air is filled with joyous celebrations. Devotees and 
              visitors alike immerse themselves in dancing, singing, and dramatic performances, often 
              reenacting the playful pranks from Lord Krishna's childhood.
            </p>

            <p className="text-orange-900 leading-relaxed">
              The streets and temples are adorned with colorful decorations and fragrant flowers, while the 
              enchanting melodies of flutes and drums create a divine atmosphere. People from across the nation 
              flock to Mathura, Vrindavan, and other parts of the holy Brajbhoomi to partake in these 
              festivals, which are a testament to the timeless legacy of Lord Krishna.
            </p>
          </div>

          <div className="bg-orange-50 px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">Essence of Braj Festivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <FaUsers className="h-12 w-12 text-orange-500 mb-4" />
                <span className="text-xl text-orange-700 font-medium mb-2">Community Unity</span>
                <p className="text-orange-600">Bringing people together in devotion and celebration</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <FaMusic className="h-12 w-12 text-orange-500 mb-4" />
                <span className="text-xl text-orange-700 font-medium mb-2">Divine Melodies</span>
                <p className="text-orange-600">Rich traditions of folk songs and spiritual music</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <FaCalendar className="h-12 w-12 text-orange-500 mb-4" />
                <span className="text-xl text-orange-700 font-medium mb-2">Year-long Festivities</span>
                <p className="text-orange-600">Continuous celebrations marking Krishna's life events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

