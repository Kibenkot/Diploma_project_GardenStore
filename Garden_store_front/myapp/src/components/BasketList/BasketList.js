import s from "./BasketList.module.css";
import { useSelector } from "react-redux";
import BasketItem from "../BasketItem/BasketItem";

function BasketList() {
  const basket = useSelector((store) => store.basket);
  // console.log("BASKET----", basket);

  return (
    <>
      {basket.length > 0 ? (
        <div>
          {basket.map((el) => (
            <BasketItem key={el.id} {...el} />
          ))}
        </div>
      ) : (
        <h2 className={s.empty}>Cart is empty!</h2>
      )}
    </>
  );
}

export default BasketList;
