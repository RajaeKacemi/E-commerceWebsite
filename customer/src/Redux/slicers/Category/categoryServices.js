import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (thunkAPI) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/categories/`);
        return response.data.categories;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
