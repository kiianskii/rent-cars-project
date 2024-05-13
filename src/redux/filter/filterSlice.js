import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filter: { brand: "", price: null, milFrom: null, milTo: null },
};

const sliceFilter = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectBrand: (state) => state.filter.brand,
    selectPrice: (state) => state.filter.price,
    selectMilFrom: (state) => state.filter.price,
    selectMilTo: (state) => state.filter.price,
    selectFilter: (state) => state.filter,
  },
  reducers: {
    changeSearchBrand: (state, { payload }) => {
      state.filter.brand = payload;
    },
    changeSearchPrice: (state, { payload }) => {
      state.filter.price = payload;
    },
    changeMilFrom: (state, { payload }) => {
      state.filter.milFrom = payload;
    },
    changeMilTo: (state, { payload }) => {
      state.filter.milTo = payload;
    },
  },
});

export const filterReducer = sliceFilter.reducer;
export const {
  changeSearchBrand,
  changeSearchPrice,
  changeMilFrom,
  changeMilTo,
} = sliceFilter.actions;
export const {
  selectBrand,
  selectPrice,
  selectMilFrom,
  selectMilTo,
  selectFilter,
} = sliceFilter.selectors;
