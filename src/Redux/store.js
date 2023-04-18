import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from '../Redux/countries/countriesSlice'

export const store = configureStore ({
    reducer: {
        country: countriesReducer,
    }
})