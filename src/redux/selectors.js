import { createSelector } from "@reduxjs/toolkit";

import { selectCars } from "./cars/slice";
import { selectFilter } from "./filter/filterSlice";

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, searchParams) => {
    return cars
      .filter((item) => item.make.includes(searchParams.make))
      .filter((item) => item.rentalPrice < searchParams.price)
      .filter((item) => item.mileage > searchParams.milFrom)
      .filter((item) => item.mileage < searchParams.milTo);
  }
);
