import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations";

const initialState = {
  cars: [],
  page: 1,
};

const slice = createSlice({
  name: "cars",
  initialState,
  selectors: {
    selectCars: (state) => state.cars,
    selectPage: (state) => state.page,
  },
  reducers: {
    changeFavorite: (state, { payload }) => {
      const item = state.cars.find((item) => item.id === payload);
      item.favorite = !item.favorite;
    },
    changePage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
      state.cars = payload;
      state.page = 1;
    });
  },
});

export const carsReducer = slice.reducer;
export const { changeFavorite, changePage } = slice.actions;

export const { selectCars, selectPage } = slice.selectors;
