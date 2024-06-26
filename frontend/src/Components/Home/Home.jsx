import React, { useEffect } from 'react'
import Carousels from './Carousels'
import './style.scss'
import Mandirs from '../Mandirs'
import PriestIntro from '../searchPriest/PriestIntro';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPriestData } from '../redux/Priest/getPriest';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';
import Cards from '../Restaurents/Cards';
import restaurentData from '../../RestaurentData.json';
import About from './About';
import Footer from '../footer/Footer';

const Home = () => {
  const Navigate = useNavigate();
  const priests = useSelector((state) => state.PriestData.priests)
 
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(fetchPriestData())
      
  },[])
  return (
    <main>
        <Carousels/>
        <About/>
        <Mandirs/>
        <div>
        <h2>Some Popular Priests in Vrindavan</h2>
        {
        priests?priests.length>0&&priests.map((priest,ind)=>(
           ind<3?<PriestIntro priest={priest} key={priest._id}/>:'' 
        )):<div>Loading...</div>
       }
       <div id='see' onClick={()=>{Navigate('/priest/find')}}>See All <FaLongArrowAltRight /></div>
        </div>
        <div className='restaurent'>
          <h2 style={{marginBottom:'33px'}}>Bhojanalaya in Vrindavan</h2>
        {
          
        restaurentData.restaurents.map(data=>(

          <Cards data={data}/>
        ))
      }
      <div id='see' onClick={()=>{Navigate('/restaurent')}}>See all <FaLongArrowAltRight /></div>
        </div>
      <Footer/>
    </main>
  )
}

export default Home