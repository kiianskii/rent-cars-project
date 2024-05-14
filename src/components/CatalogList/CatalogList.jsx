import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/cars/operations";

import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./CatalogList.module.css";
import { selectFilteredCars } from "../../redux/selectors";

function CatalogList() {
  const dispatch = useDispatch();
  const filteredCars = useSelector(selectFilteredCars);

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return filteredCars?.length ? (
    <div className={s.container}>
      <ul className={s.list}>
        {filteredCars.map((item) => {
          return <CatalogItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  ) : (
    <h2 className={s.empty}>No avaliable cars.</h2>
  );
}

export default CatalogList;
