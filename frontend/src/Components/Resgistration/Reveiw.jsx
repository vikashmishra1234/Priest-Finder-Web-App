import React from 'react'
import Carousels from './Carousel'
import FeedbackForm from './FeedbackForm'

const Reveiw = ({priestId}) => {
  return (
    <div className=''>
        <h2>FeedBacks</h2>
        <div>
          <Carousels priestId={priestId}/>
          <FeedbackForm priestId={priestId}/>
        </div>
    </div>
  )
}

export default Reveiw