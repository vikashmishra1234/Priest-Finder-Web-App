import React from 'react'
import Cards from './Restaurents/Cards';
import mandirData from '../mandirData.json'

const Mandirs = () => {
  return (
   <section className='restaurent'>
    <h2 style={{marginBottom:'35px'}}>Some Popular Must Visit Temples</h2>
    {
        mandirData.mandirs.map(mandir=>(

            <Cards key={Math.random()} data={mandir}/>
        ))
    }
   </section>
  )
}

export default Mandirs