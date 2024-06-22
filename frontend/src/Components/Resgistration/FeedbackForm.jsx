import React, { useContext, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { addFeedback } from '../../Services/Apis';
import ContextProvider from '../../Context/ContextProvider';

const FeedbackForm = ({priestId}) => {
    const [feedback,setFeedback]=useState({});
    const [show,setShow] = useState(false);
    const {setChange} = useContext(ContextProvider);
    const handleSubmit=async(e)=>{
        e.preventDefault();
       feedback.priestId=priestId
        const res = await addFeedback(feedback)
        res&&alert(res.message)
        setChange(Math.random())

    }
    const handleChange = (e) =>{
        setFeedback({...feedback,[e.target.name]:e.target.value});
    }
  return (
  <>
  <a id='feedbacks' href="#btn">

  <div  onClick={()=>{setShow(!show)}} className='feedback-heading'>

    <h3>Enter your feedback </h3>
    <div id='arrow'><FaArrowRightLong  /></div>
   
  </div>
  </a>
{   show&&<form onSubmit={handleSubmit} className='feedback-form' action="">
        <h2>Give Feedback</h2>
        <div>
            <input placeholder='Please Enter Your Name' onChange={handleChange}  type="text" name="user_Name" id="" />
        </div>
        <div>

            <textarea placeholder='Your Feedback' onChange={handleChange} type="text"  name="Feedback" id="" />
        </div>
        <button id='btn' type='submit'>Submit</button>
    </form>}
  </>
  )
}

export default FeedbackForm