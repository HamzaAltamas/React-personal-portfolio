import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./Slices/ThemeChangeSlice";
import ColorSlice from "./Slices/ColorChangingSlice";

export const store = configureStore({
    reducer: {
        theme:ThemeSlice,
        color:ColorSlice,
       
    },
  })
  