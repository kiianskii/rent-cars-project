import s from "./Modal.module.css";

import { useCallback, useEffect } from "react";

const Modal = ({ item, closeModal }) => {
  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    address,

    type,
    mileage,
    functionalities,
    description,
    id,
    engineSize,
    fuelConsumption,
    accessories,
    rentalConditions,
  } = item;

  console.log(rentalConditions.split("\n"));
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, handleKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <button onClick={closeModal} className={s.closeBtn}>
          X
        </button>
        <img className={s.img} src={img} alt={model} />
        <div className={s.top_wrapper}>
          <div className={s.title_wrapper}>
            <h2 className={s.title}>
              {make} {model}, {year}
            </h2>
          </div>
          <p className={s.title_descr}>
            {address} | Id: {id} | Year: {year} | Type: {type} | Fuel
            consumption: {fuelConsumption} | Engine Size: {engineSize}
          </p>
          <h3 className={s.small_title}>{description}</h3>
        </div>
        <div>
          <h3 className={s.small_title}>Accessories and functionalities:</h3>
          <p className={s.title_descr}>
            {functionalities.join(" | ")} | {accessories.join(" | ")}
          </p>
        </div>
        <div>
          <h3 className={s.small_title}>Rental Conditions:</h3>
          <p className={s.cond_wrapper}>
            {rentalConditions.split("\n").map((item) => {
              return (
                <span className={s.conditions} key={item}>
                  {item}
                </span>
              );
            })}

            <span className={s.conditions}>Mileage: {mileage}</span>
            <span className={s.conditions}>Price: {rentalPrice}</span>
          </p>
        </div>
        <a href="tel:+380730000000" className={s.btn}>
          Rental car
        </a>
      </div>
    </div>
  );
};

export default Modal;
