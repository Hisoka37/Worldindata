import { createSlice } from '@reduxjs/toolkit';
import { displayAllcountries, searchByCode, searchByRegion } from './countriesAction';

const initialState = {
  loading: false,
  countriesData: [],
  countrySearched: [],
  error: false,
  searchTerm: '',
  success: false,
  message: '',
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = '';
      state.countrySearched = [];
      state.region = '';
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
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
      })
      .addCase(searchByCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.countrySearched = action.payload;
        state.success = true;
      })
      .addCase(searchByCode.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countrySearched = [];
      })
      .addCase(searchByRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(searchByRegion.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      });
  },
});

export const { reset, setRegion, setSearchTerm } = countriesSlice.actions;
export default countriesSlice.reducer;
