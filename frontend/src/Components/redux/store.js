import { configureStore } from '@reduxjs/toolkit'
import PreistData from './Priest/getPriest';
import PriestFeedback from './Priest/Feedbacks'

export const store = configureStore({
  reducer: {
    PriestData: PreistData,
    Feedbacks:PriestFeedback
  },
})