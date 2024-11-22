import React from 'react'
import Cards from './Restaurents/Cards'
import mandirData from '../mandirData.json'
import { MdTempleHindu } from "react-icons/md"

const Mandirs = () => {
  return (
    <section className="bg-gradient-to-b from-orange-100 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 flex items-center justify-center">
          <MdTempleHindu className="mr-2 text-4xl" />
          Popular Must-Visit Temples
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mandirData.mandirs.map((mandir, index) => (
            <Cards key={index} data={mandir} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mandirs

