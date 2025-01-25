import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { // ALL THESE ARE ACTIONS
      state.value += 1
    },
    decrement: (state) => { // ACTION
      state.value -= 1
    },
    incrementByAmount: (state, action) => { // ACTION
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {increment,decrement,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer; // CREATES A REDUCER OF COUNTERSLICE