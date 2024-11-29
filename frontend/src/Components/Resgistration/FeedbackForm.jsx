import React, { useContext, useState } from 'react'
import { FaArrowAltCircleLeft, FaPaperPlane, FaTimes } from "react-icons/fa"
import { addFeedback } from '../../Services/Apis'
import ContextProvider from '../../Context/ContextProvider'



const FeedbackForm = ({ priestId }) => {
  const [feedback, setFeedback] = useState({ user_Name: '', Feedback: '' })
  const [show, setShow] = useState(false)
  const { setChange } = useContext(ContextProvider)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const feedbackData = { ...feedback, priestId }
    const res = await addFeedback(feedbackData)
    if (res) {
      alert(res.message)
      setFeedback({ user_Name: '', Feedback: '' })
      setShow(false)
      setChange(Math.random())
    }
  }

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value })
  }

  return (
    <div className=" my-8">
      <a
      href='#bt'
        onClick={() => setShow(!show)}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 flex items-center justify-between"
      >
        <span className="text-lg">Enter your feedback</span>
        <FaArrowAltCircleLeft className={`transition-transform duration-300 ${show ? 'rotate-90' : ''}`} />
      </a>

      {show && (
        <div className="mt-4 bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Give Feedback</h2>
            <button
              onClick={() => setShow(false)}
              className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
              aria-label="Close feedback form"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                placeholder="Please Enter Your Name"
                onChange={handleChange}
                type="text"
                name="user_Name"
                value={feedback.user_Name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Feedback"
                onChange={handleChange}
                name="Feedback"
                value={feedback.Feedback}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent h-32 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              id='bt'
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
            >
              <FaPaperPlane className="mr-2" />
              Submit Feedback
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default FeedbackForm

