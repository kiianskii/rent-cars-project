// import { useState } from "react";
import { useDispatch } from "react-redux";
import { brands } from "../../assets/brands";
import { changeFilter, resetFilter } from "../../redux/filter/filterSlice";
import { useState } from "react";

function SearchForm() {
  const dispatch = useDispatch();

  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(Infinity);
  const [milFrom, setMilFrom] = useState(0);
  const [milTo, setMilTo] = useState(Infinity);

  const priceList = [];
  for (let i = 0; i <= 500; i += 10) {
    priceList.push(i);
  }

  const onReset = () => {
    dispatch(resetFilter);
  };

  const onSearch = () => {
    const filter = {
      brand,
      price,
      milFrom,
      milTo,
    };
    dispatch(changeFilter(filter));
  };

  return (
    <>
      <label>
        <span>Car brand</span>

        <select
          value={brand}
          name="brands"
          id="brands"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="1">Enter brand</option>
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
          value={price}
          name="price"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">To $</option>
          {priceList.map((item) => {
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
          onChange={(e) => setMilFrom(e.target.value)}
        />
        <input
          type="number"
          name="milTo"
          placeholder="To"
          onChange={(e) => setMilTo(e.target.value)}
        />
      </label>
      <button onClick={() => onReset()}>Reset</button>
      <button onClick={() => onSearch()}>Search</button>
    </>
  );
}

export default SearchForm;
