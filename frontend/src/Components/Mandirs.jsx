import React, { useEffect, useState } from 'react'
import Cards from './Restaurents/Cards'
import mandirData from '../mandirData.json'
import { MdTempleHindu } from "react-icons/md"

const Mandirs = () => {
  const [temples,setTemples] = useState(mandirData.mandirs)
  useEffect(()=>{

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
         console.log("your coordinates are",latitude,longitude)
         let newData = mandirData.mandirs.map(item=>{
            item.distance = haversine(item.lat,item.log,latitude,longitude)
            return item
          })
         setTemples(newData)
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  },[navigator.geolocation])

  
  function haversine(lat1, lon1, lat2, lon2) {
    const toRadians = (angle) => angle * (Math.PI / 180);
      if (![lat1, lon1, lat2, lon2].every(num => typeof num === "number")) {
          throw new Error("All inputs must be numbers.");
      }
  
      const R =6371 // Earth's radius in km or miles
      const dLat = toRadians(lat2 - lat1);
      const dLon = toRadians(lon2 - lon1);
      const lat1Rad = toRadians(lat1);
      const lat2Rad = toRadians(lat2);
  
      const a = Math.sin(dLat / 2) ** 2 +
                Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
      return R * c; // Distance in the chosen unit
  }


console.log(temples,"this is temples")

// console.log(`Distance: ${haversine(lat1, lon1, lat2, lon2).toFixed(2)} km`);
  
  return (
    <section className="bg-gradient-to-b from-orange-100 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      {
        temples[0]?.distance<5?
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 flex items-center justify-center">
          <MdTempleHindu className="mr-2 text-4xl" />
          Ancient Temples Near You.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {temples.map((mandir, index) => (
           mandir.distance<5&& <Cards distance={mandir.distance} key={index} data={mandir} />
          ))}
        </div>
      </div>
        :
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 flex items-center justify-center">
          <MdTempleHindu className="mr-2 text-4xl" />
          Popular Must-Visit Temples. <small>Please enable your location to see the best nearest temple to you</small>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {temples.map((mandir, index) => (
            <Cards key={index} data={mandir} />
          ))}
        </div>
      </div>
      }
    </section>
  )
}

export default Mandirs

