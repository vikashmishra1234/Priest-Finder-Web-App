import React, { useContext, useEffect, useState } from "react";
import PriestIntro from "./PriestIntro";
import ContextProvider from "../../Context/ContextProvider";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import Reveiw from "../Resgistration/Reveiw";
import { useDispatch } from "react-redux";
import { fetchPriestData } from "../redux/Priest/getPriest";
import { Loading } from "../Loader";


const ProfilePriest = ({ setChanges }) => {

  const dispatch = useDispatch();
  const location = useLocation();
  const resPriest = useSelector((state) => state.PriestData.priests);
  const loading = useSelector((state) => state.PriestData.loading);

  const [priest,setPriest] = useState();
  useEffect(()=>{
    const searchQuery = location.search;
    const queryParams = new URLSearchParams(searchQuery);
    const priestId = queryParams.get("priestId");
    const priestes =resPriest&&resPriest.find(obj => obj._id === priestId);
    setPriest(priestes)

  },[resPriest])
  useEffect(()=>{
    dispatch(fetchPriestData());
  },[])
 
  return (
    <div >

        {loading?<Loading/>:priest&&<PriestIntro profile={true} priest={priest} />}
        {!loading?priest&&<Reveiw priestId={priest._id}/>:<Loading/>}
    </div>
  );
};

export default ProfilePriest;
