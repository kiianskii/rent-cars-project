import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  brand: "",
  price: Infinity,
  milFrom: 0,
  milTo: Infinity,
};

const sliceFilter = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectFilter: (state) => state,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.brand = payload.brand;
      state.price = payload.price;
      state.milFrom = payload.milFrom;
      state.milTo = payload.milTo;
    },
    resetFilter: (state) => {
      state.brand = "";
      state.price = Infinity;
      state.milFrom = 0;
      state.milTo = Infinity;
    },
  },
});

export const filterReducer = sliceFilter.reducer;
export const { changeFilter, resetFilter } = sliceFilter.actions;
export const { selectFilter } = sliceFilter.selectors;
