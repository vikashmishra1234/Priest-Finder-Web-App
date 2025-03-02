import React from 'react'

const TakeMandirInput = (setSearchTemple) => {

  return (
    <div>
        <input  type="text" onChange={(e)=>setSearchTemple(e.target.value)} placeholder='Enter The Temple Name' />
    </div>
  )
}

export default TakeMandirInput