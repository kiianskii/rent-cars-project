import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://663dd9e4e1913c476795a2bb.mockapi.io/api/";

export const fetchCarsThunk = createAsyncThunk(
  "cars/fetchAll",
  async (thunkAPI) => {
    try {
      const { data } = await axios.get("cars");
      const newData = data.map((item) => {
        return { ...item, favorite: false };
      });
      return newData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
