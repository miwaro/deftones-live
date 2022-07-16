import { configureStore } from '@reduxjs/toolkit';
import showsSlice from "./shows/showsSlice.js";

export const store = configureStore({
    reducer: showsSlice
})
