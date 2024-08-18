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
        dispatch(fetchPriestData())
        
    },[])
    useEffect(()=>{
        window.scrollTo(0, 0);
        
    },[])
    if(loading){
        return <Loading/>
    }
  return (
    <>
    <section className='search-priest'>
        <div className='heading'>
            <h2>
                Some Popular Priest In Mathura-Vrindavan
            </h2>
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