import s from "./CatalogItem.module.css";

function CatalogItem({ item }) {
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
  } = item;
  return (
    <li className={s.item}>
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
      <button className={s.btn}>Learn more</button>
    </li>
  );
}

export default CatalogItem;
