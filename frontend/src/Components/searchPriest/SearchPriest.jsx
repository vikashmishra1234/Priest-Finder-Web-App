import React, { useContext, useEffect, useState } from 'react'
import PriestIntro from './PriestIntro'
import './style.scss'
import { getPriests } from '../../Services/Apis'
import ContextProvider from '../../Context/ContextProvider'
import { useSelector, useDispatch } from 'react-redux'
import {fetchPriestData } from '../redux/Priest/getPriest'
import { Loading } from '../Loader'
const SearchPriest = ({changes}) => {
    const priests = useSelector((state) => state.PriestData.priests)
    const loading = useSelector((state) => state.PriestData.loading)
    const dispatch = useDispatch()
    useEffect(()=>{
        !priests&&dispatch(fetchPriestData())
        
    },[priests])
    useEffect(()=>{
        window.scrollTo(0, 0);
        
    },[])
  return (
    <>
    <section className='mt-10'>
        {
            loading&&<Loading/>
        }
        <div className=''>
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 flex items-center justify-center">Some Popular Priests in Vrindavan</h2>

        </div>
       {
        priests&&priests.length>0&&priests.map((priest)=>(
            <PriestIntro priest={priest} key={priest._id}/>
        ))
       }
    </section>
    </>
  )
}

export default SearchPriest