import { useSelector } from "react-redux";
import { selectCars } from "../../redux/slice";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import s from "./FavoritesPage.module.css";

function FavoritesPage() {
  const cars = useSelector(selectCars);
  const favoriteCars = cars.filter((item) => item.favorite);
  return favoriteCars.length ? (
    <ul className={s.list}>
      {favoriteCars.map((item) => {
        return <CatalogItem key={item.id} item={item} />;
      })}
    </ul>
  ) : (
    <h3 className={s.text}>No favorite cars yet. Choose car you want.</h3>
  );
}

export default FavoritesPage;
