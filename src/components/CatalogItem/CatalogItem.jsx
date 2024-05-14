import { useDispatch } from "react-redux";
import { useToggle } from "../../hooks/useToggle";
import { changeFavorite } from "../../redux/cars/slice";
import Modal from "../Modal/Modal";
import s from "./CatalogItem.module.css";
import Icons from "../../assets/sprite.svg";
import { useEffect } from "react";
// import { Icon } from "../../assets/Icon";

function CatalogItem({ item }) {
  const dispatch = useDispatch();
  const { openModal, closeModal, isOpen } = useToggle();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
    favorite,
  } = item;

  const favoriteIcon = favorite ? "#icon-active" : "#icon-normal";
  return (
    <li className={s.item}>
      <label className={s.label}>
        <input
          id="favorite"
          className={s.checkbox + " " + s.visually_hidden}
          checked={favorite}
          type="checkbox"
          onChange={() => dispatch(changeFavorite(item.id))}
        />
        <span className={s.heart_span}>
          <svg width={18} height={18} className={s.heart}>
            <use href={Icons + favoriteIcon}></use>
          </svg>
        </span>
      </label>
      <>
        <img className={s.img} src={img} alt={model} width="274" height="268" />
        <div>
          <div className={s.title_wrapper}>
            <h3>
              {make} {model}, {year}
            </h3>
            <p>{rentalPrice}</p>
          </div>
          <p>
            {address} | {rentalCompany} | {type} | {model} | {mileage} |{" "}
            {functionalities[0]}
          </p>
        </div>
        <button className={s.btn} onClick={openModal}>
          Learn more
        </button>
      </>
      {isOpen && <Modal closeModal={closeModal} item={item} />}
    </li>
  );
}

export default CatalogItem;
