import { useDispatch } from "react-redux";
import { brands } from "../../assets/brands";
import { changeFilter } from "../../redux/filter/filterSlice";
import { useState } from "react";
import s from "./SearchForm.module.css";

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
    setBrand("");
    setPrice(Infinity);
    setMilFrom(0);
    setMilTo(Infinity);
    const filter = {
      brand: "",
      price: Infinity,
      milFrom: 0,
      milTo: Infinity,
    };
    dispatch(changeFilter(filter));
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
    <div className={s.wrapper}>
      <label className={s.label}>
        <span>Car brand</span>

        <select
          className={s.brand_select}
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
      <label className={s.label}>
        <span>Price / 1 hour</span>
        <select
          className={s.price_select}
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
      <label className={s.label}>
        <span>Car mileage / km</span>
        <div className={s.mileage_label}>
          <input
            className={s.mileage_from}
            value={milFrom ? milFrom : " "}
            type="number"
            name="milFrom"
            placeholder="From"
            onChange={(e) => setMilFrom(e.target.value)}
          />
          <input
            className={s.mileage_to}
            value={milTo < Infinity ? milTo : ""}
            type="number"
            name="milTo"
            placeholder="To"
            onChange={(e) => setMilTo(e.target.value)}
          />
        </div>
      </label>
      <label>
        <span className={s.invisible}>Car mileage / km</span>
        <div className={s.btn_wrapper}>
          <button className={s.btn} onClick={() => onReset()}>
            Reset
          </button>
          <button className={s.btn} onClick={() => onSearch()}>
            Search
          </button>
        </div>
      </label>
    </div>
  );
}

export default SearchForm;
