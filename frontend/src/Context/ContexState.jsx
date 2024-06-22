import React, { useEffect, useState } from 'react'
import ContextProvider from './ContextProvider.jsx';


const ContextState = (props) => {
 
  const [priest,setPriest] =useState({Name:'',Password:'',Whatsapp:"",Profile:'',Phone:''});
  const [change,setChange] = useState(Math.random());
  const [PriestProfile,setProfilePriest] = useState([]);
 
  return (
    <ContextProvider.Provider value={{priest,change,PriestProfile,setProfilePriest,setChange,setPriest}} >
        {props.children}
    </ContextProvider.Provider>
  )
}

export default ContextState
