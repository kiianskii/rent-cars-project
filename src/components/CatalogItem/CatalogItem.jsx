import { useDispatch } from "react-redux";
import { useToggle } from "../../hooks/useToggle";
import { changeFavorite } from "../../redux/cars/slice";
import Modal from "../Modal/Modal";
import s from "./CatalogItem.module.css";
import { useEffect } from "react";
import active_logo from "../../assets/active.svg";
import normal_logo from "../../assets/normal.svg";
// import { Icon } from "../../../public/Icon";

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
          {favorite ? (
            // <svg width={18} height={18} className={s.heart}>
            //   <use href={Icons + "#icon-active"}></use>
            // </svg>

            // <Icon size={18} id="active" className={s.heart} />
            <img src={active_logo} alt="logo" height={18} width={18} />
          ) : (
            // <svg width={18} height={18} className={s.heart}>
            //   <use href={Icons + "#icon-normal"}></use>
            // </svg>normal_logo
            <img src={normal_logo} alt="logotype" height={18} width={18} />
            // <Icon size={18} id="normal" className={s.heart} />
          )}
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
