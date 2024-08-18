import React, { useContext, useEffect, useState } from 'react'
import Profile from './Profile'
import './style.scss'
import Reveiw from './Reveiw'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '../../Services/Apis'
import ContextProvider from '../../Context/ContextProvider'
import { Loading } from '../Loader'
const Registration = () => {
  const Navigate = useNavigate();
  const [profileData,setProfileData]= useState();
  const [loading,setLoading] = useState(false);
  const {priest,setPriest,change} = useContext(ContextProvider);
  const {tokenExits,setTokenExits} = useContext(ContextProvider);
  useEffect(()=>{
    if(!tokenExits){
      setPriest({Name:'',Password:'',Whatsapp:"",Profile:'',Phone:''})
      Navigate('/register');
    }
 },[tokenExits])
 useEffect(()=>{
  
    const getPriest=async()=>{
      setLoading(true);
        const res = await getProfile();
        setLoading(false);
        if(res&&res.success){

          setProfileData(res.priest);
          setPriest(res.priest);
        }
    }
    getPriest();
 },[]);
  return (
    <section>
{
  loading&&<Loading/>
}
        {profileData&&<Profile setTokenExits={setTokenExits} profileData={profileData}/>}
        {/* <Reveiw/> */}
        
    </section>
  )
}

export default Registration