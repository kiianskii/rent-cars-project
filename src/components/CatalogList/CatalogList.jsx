import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/cars/operations";
import { selectCars } from "../../redux/cars/slice";
import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./CatalogList.module.css";
import { selectFilteredCars } from "../../redux/selectors";

function CatalogList() {
  const dispatch = useDispatch();
  const filteredCars = useSelector(selectFilteredCars);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return filteredCars.length ? (
    <ul className={s.list}>
      {filteredCars.map((item) => {
        return <CatalogItem key={item.id} item={item} />;
      })}
    </ul>
  ) : (
    <ul className={s.list}>
      {cars.map((item) => {
        return <CatalogItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default CatalogList;
