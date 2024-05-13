import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations";

const initialState = {
  cars: [],
  //   isLoading: false,
  //   isError: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  selectors: {
    selectCars: (state) => state.cars,
    // selectIsError: (state) => state.isError,
    // selectIsLoading: (state) => state.isLoading,
  },
  reducers: {
    changeFavorite: (state, { payload }) => {
      const item = state.cars.find((item) => item.id === payload);
      item.favorite = !item.favorite;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
      state.cars = payload;
    });
  },
});

export const carsReducer = slice.reducer;
export const { changeFavorite } = slice.actions;

export const { selectCars } = slice.selectors;
