import React, { useEffect } from 'react'
import Cards from './Cards'
import './style.scss';
import restaurentData from '../../RestaurentData.json';
const Restaurent = () => {
  useEffect(()=>{
window.scrollTo(0,0)
  },[])
  return (
    <div className="mt-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 flex items-center justify-center">
          Bhojanalaya in Vrindavan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurentData.restaurents.map((data) => (
            <Cards data={data} />
          ))}
        </div>
      
      </div>
  )
}

export default Restaurent