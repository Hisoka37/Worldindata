import { createSlice } from "@reduxjs/toolkit";
import { displayAllcountries } from "./countriesAction";

const initialState = {
  loading: false,
  countriesData: [],
  countryData: [],
  error: false,
  success: false,
  message: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
    },

  extraReducers: (builder) => {
    builder
      .addCase(displayAllcountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(displayAllcountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
        state.countryData = action.payload;
      })
      .addCase(displayAllcountries.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      });
  },
},
});

export default countriesSlice.reducer;
