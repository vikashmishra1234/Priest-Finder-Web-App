import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Priest/getPriest'

export const store = configureStore({
  reducer: {
    PriestData: counterReducer,
  },
})