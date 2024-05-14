import s from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={s.container}>
      <h1 className={s.header}>Rent a car throughout Ukraine</h1>
      <h2 className={s.text}>Always the lowest prices for car rental</h2>
      <div className={s.wrapper}>
        <div className={s.left}></div>
        <div className={s.right}></div>
      </div>
    </div>
  );
}

export default HomePage;
