import React, { useEffect } from 'react'
import Cards from './Cards'
import './style.scss';
import restaurentData from '../../RestaurentData.json';
const Restaurent = () => {
  useEffect(()=>{
window.scrollTo(0,0)
  },[])
  return (
    <div className='restaurent'>
      <h2>Restaurents</h2>
      {
        restaurentData.restaurents.map(data=>(

          <Cards data={data}/>
        ))
      }
    </div>
  )
}

export default Restaurent