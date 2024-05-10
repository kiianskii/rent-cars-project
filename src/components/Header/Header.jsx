import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

function Header() {
  return (
    <div className={s.list}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      <NavLink className={s.link} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={s.link} to="/favorites">
        Favorites
      </NavLink>
    </div>
  );
}

export default Header;
