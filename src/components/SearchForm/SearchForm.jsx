// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { brands } from "../../assets/brands";
import {
  changeMilFrom,
  changeMilTo,
  changeSearchBrand,
  changeSearchPrice,
  selectBrand,
  selectPrice,
} from "../../redux/filter/filterSlice";

function SearchForm() {
  const dispatch = useDispatch();
  const brand = useSelector(selectBrand);
  const currentPrice = useSelector(selectPrice);

  const price = [];
  for (let i = 0; i <= 500; i += 10) {
    price.push(i);
  }

  const onReset = () => {
    dispatch(changeSearchBrand(""));
    dispatch(changeSearchPrice(null));
    dispatch(changeMilFrom(null));
    dispatch(changeMilTo(null));
  };
  return (
    <>
      <label>
        <span>Car brand</span>

        <select
          value={brand}
          name="brands"
          id="brands"
          onChange={(e) => dispatch(changeSearchBrand(e.target.value))}
        >
          <option value="">Enter brand</option>
          {brands.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        <span>Price / 1 hour</span>
        <select
          value={currentPrice}
          name="price"
          id="price"
          onChange={(e) => dispatch(changeSearchPrice(e.target.value))}
        >
          <option value="">To $</option>
          {price.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        <span>Car mileage / km</span>
        <input
          type="number"
          name="milFrom"
          placeholder="From"
          onChange={(e) => dispatch(changeMilFrom(e.target.value))}
        />
        <input
          type="number"
          name="milTo"
          placeholder="To"
          onChange={(e) => dispatch(changeMilTo(e.target.value))}
        />
      </label>
      <button onClick={() => onReset()}>Reset</button>
      <button>Search</button>
    </>
  );
}

export default SearchForm;
