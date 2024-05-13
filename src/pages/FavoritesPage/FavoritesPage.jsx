import { useSelector } from "react-redux";
import { selectCars } from "../../redux/slice";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import s from "./FavoritesPage.module.css";

function FavoritesPage() {
  const cars = useSelector(selectCars);
  const favoriteCars = cars.filter((item) => item.favorite);
  return (
    <ul className={s.list}>
      {favoriteCars.map((item) => {
        return <CatalogItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default FavoritesPage;
