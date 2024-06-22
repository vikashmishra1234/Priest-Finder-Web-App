import React, { useContext, useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Feedbacks from './Feedbacks';
import { getFeedback } from '../../Services/Apis';
import { retry } from '@reduxjs/toolkit/query';
import ContextProvider from '../../Context/ContextProvider';
const Carousels = ({priestId}) => {
  const [feedbacks,setFeedback] = useState([]);
  const {change} = useContext(ContextProvider);
  useEffect(()=>{
    const getData = async()=>{
      
      const res = await getFeedback(priestId);
      setFeedback(res.feedbacks)
      
    }
   getData()
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
  feedbacks.length>0?feedbacks.map(feed=>(
    <div style={{marginTop:'20px'}}>

      <Feedbacks Name={feed.user_Name} Feedback={feed.Feedback} key={feed._id}/>
    </div>
  )):''
}
  
</Carousel>
  )
}

export default Carousels