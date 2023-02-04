import { createSlice } from '@reduxjs/toolkit'

export const themeChangeSlice = createSlice({
  name: 'themeChange',
  initialState:{
    themeChangeValue: localStorage.getItem("theme") ? localStorage.getItem("theme") : true
  },
  reducers: {
    theme: (state,action) => {
      state.themeChangeValue = action.payload
      
    }
  },
})


export const { theme } = themeChangeSlice.actions

export default themeChangeSlice.reducer