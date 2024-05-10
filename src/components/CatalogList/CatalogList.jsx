import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/operations";
import { selectCars } from "../../redux/slice";
import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./CatalogList.module.css";

function CatalogList() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {cars.map((item) => {
        return <CatalogItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default CatalogList;
