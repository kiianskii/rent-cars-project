import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://663dd9e4e1913c476795a2bb.mockapi.io/api/";

export const fetchCarsThunk = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    const savedCars = thunkAPI.getState().cars.cars;
    if (!savedCars.length) {
      try {
        const { data } = await axios.get("cars", {
          params: { page: 1, limit: 12 },
        });
        const newData = data.map((item) => {
          return { ...item, favorite: false };
        });
        return newData;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    } else {
      return savedCars;
    }
  }
);
