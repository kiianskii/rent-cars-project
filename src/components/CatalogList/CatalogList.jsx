import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/cars/operations";

import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./CatalogList.module.css";
import { selectFilteredCars } from "../../redux/selectors";
import { changePage, selectPage } from "../../redux/cars/slice";

function CatalogList() {
  const dispatch = useDispatch();
  const filteredCars = useSelector(selectFilteredCars);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchCarsThunk(page));
  }, [dispatch, page]);

  const onLoadMoreBtn = () => {
    changePage();
  };

  return !filteredCars.length ? (
    <h2 className={s.empty}>No avaliable cars.</h2>
  ) : (
    <div className={s.container}>
      <ul className={s.list}>
        {filteredCars.map((item) => {
          return <CatalogItem key={item.id} item={item} />;
        })}
      </ul>
      <button className={s.load_btn} onClick={() => onLoadMoreBtn()}>
        Load more
      </button>
    </div>
  );
}

export default CatalogList;
