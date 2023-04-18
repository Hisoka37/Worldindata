 import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';
 

export const displayAllcountries = createAsyncThunk("countries/displayAll",async(_,thunkAPI) =>{
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`)
        console.log(response.data);
        return response.data;
    }catch(err) {
         const message = (err.response && err.response.data) || err.message;
         // send error message as a payload
        return thunkAPI.rejectWithValue(message);
    }
    
})