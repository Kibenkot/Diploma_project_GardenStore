import React from "react";
import s from "./BasketItem.module.css";
import { useDispatch } from "react-redux";
import { IoIosClose } from "react-icons/io";
import {
  decrementCountBasketAction,
  deleteProductBasketAction,
  incrementCountBasketAction,
} from "../../store/reducers/basketReducer";

function BasketItem({ id, title, price, discont_price, image, count }) {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div className={s.product_img}>

      <div className={s.close_mobil}>
        <IoIosClose
          className={s.icon_close}
          onClick={() => dispatch(deleteProductBasketAction(id))}
        />
      </div>
      <div className={s.product_img_mobil}>
        <img src={`http://localhost:3333/${image}`} alt="product" />
      </div>
      </div>
      <div className={s.product_title_count}>
        <h3>{title}</h3>
        <div className={s.product_counter}>
          <button onClick={() => dispatch(decrementCountBasketAction(id))}>
            -
          </button>
          <p>{count}</p>
          <button onClick={() => dispatch(incrementCountBasketAction(id))}>
            +
          </button>
        </div>
      </div>
      <div className={s.product_discont_price}>
        <p>{discont_price ? discont_price : price}
        <span style={{ fontSize: "15px" }}>$</span>
        </p>
      </div>
      <div className={s.product_price}>
        <p>{price}
        <span style={{ fontSize: "15px" }}>$</span>
        </p>
      </div>
      <div className={s.close}>
        <IoIosClose
          className={s.icon_close}
          onClick={() => dispatch(deleteProductBasketAction(id))}
        />
      </div>
    </div>
   
  );
}

export default BasketItem;
