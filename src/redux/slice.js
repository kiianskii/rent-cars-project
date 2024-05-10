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
  extraReducers: (builder) => {
    builder.addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
      state.cars = payload;
    });
  },
});

export const carsReducer = slice.reducer;
export const { selectCars } = slice.selectors;
