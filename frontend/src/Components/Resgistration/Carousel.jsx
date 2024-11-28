import React, { useContext, useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Feedbacks from './Feedbacks';
import { getFeedback } from '../../Services/Apis';
import { retry } from '@reduxjs/toolkit/query';
import ContextProvider from '../../Context/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/Priest/Feedbacks';
const Carousels = ({priestId}) => {
  const {change} = useContext(ContextProvider);
  const feedbacks = useSelector((state)=>{
   return state.Feedbacks.feedbacks
  })
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchData(priestId))
  },[priestId,change])
  return (
    <Carousel
   infiniteLoop={true}
    showThumbs={false}
    emulateTouch={false}
    swipeable={false}
    autoPlay={true}
    >
{
  feedbacks?feedbacks.map(feed=>(
    <div style={{marginTop:'20px'}}>

      <Feedbacks Name={feed.user_Name} Feedback={feed.Feedback} key={feed._id}/>
    </div>
  )):''
}
  
</Carousel>
  )
}

export default Carousels