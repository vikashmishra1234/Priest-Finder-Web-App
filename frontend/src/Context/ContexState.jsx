import React, { useEffect, useState } from 'react'
import ContextProvider from './ContextProvider.jsx';


const ContextState = (props) => {
 
  const [priest,setPriest] =useState({Name:'',Password:'',Whatsapp:"",Profile:'',Phone:''});
  const [change,setChange] = useState(Math.random());
  const [PriestProfile,setProfilePriest] = useState([]);
  const [tokenExits,setTokenExits] = useState(false);
 
  return (
    <ContextProvider.Provider value={{priest,change,tokenExits,PriestProfile,setTokenExits,setProfilePriest,setChange,setPriest}} >
        {props.children}
    </ContextProvider.Provider>
  )
}

export default ContextState
