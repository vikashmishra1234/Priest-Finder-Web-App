import React from 'react'
import Carousels from './Carousel'
import FeedbackForm from './FeedbackForm'

const Reveiw = ({priestId}) => {
  return (
    <div className='max-w-4xl m-auto'>
        <h2 className='bg-orange-400 py-4 text-center text-3xl'>Feedbacks</h2>
        <div>
          <Carousels priestId={priestId}/>
          <FeedbackForm priestId={priestId}/>
        </div>
    </div>
  )
}

export default Reveiw