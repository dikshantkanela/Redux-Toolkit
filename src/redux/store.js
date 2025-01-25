import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from '../features/counter/counterSlice' // No curly braces for default export

export const store = configureStore({
  reducer: {
   counter: counterReducer //REGISTERED THE COUNTER REDUCER IN THE STORE!
  },
})