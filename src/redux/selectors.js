import { createSelector } from "@reduxjs/toolkit";

import { selectCars } from "./cars/slice";
import { selectFilter } from "./filter/filterSlice";

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, searchParams) => {
    return cars
      ?.filter((item) => item.make.includes(searchParams.brand))
      .filter(
        (item) => parseInt(item.rentalPrice.substring(1)) < searchParams.price
      )
      .filter((item) => item.mileage > searchParams.milFrom)
      .filter((item) => item.mileage < searchParams.milTo);
  }
);
