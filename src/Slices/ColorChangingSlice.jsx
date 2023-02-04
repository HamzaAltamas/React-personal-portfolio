import { createSlice } from '@reduxjs/toolkit'

export const colorChangingSlice = createSlice({
  name: 'ColorChange',
  initialState:{
    colorChangeValue: localStorage.getItem("colorClass") ? localStorage.getItem("colorClass") : null,
    cursorColorValue: localStorage.getItem("cursorColor") ? localStorage.getItem("cursorColor") : null,
    particleColorValue: localStorage.getItem("particleColor") ? localStorage.getItem("particleColor") : null
  },
  reducers: {
    color: (state,action) => {
      state.colorChangeValue = action.payload 
    },
    cursorColor: (state,action) =>{
      state.cursorColorValue = action.payload
    },
    colorParticle:(state,action) =>{
        state.particleColorValue = action.payload
    }
  },
})


export const { color,cursorColor,colorParticle } = colorChangingSlice.actions

export default colorChangingSlice.reducer