import React from "react";
import s from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import { addToBasketAction } from "../../../store/reducers/basketReducer";
import { useDispatch } from "react-redux";
import Button from '../Button/Button'

function ProductItem(props) {
  const { id, title, price, discont_price, image, style_product } = props;

  const dispatch = useDispatch();

  const discont = Math.round((discont_price * 100) / price - 100);

  const addToBasket = (e) => {
    e.preventDefault();
    dispatch(addToBasketAction(props));
  };

  return (
    <div>
      <div className={`${s.wrapper} ${s[style_product]} `}>
        <Link to={`/products/${id}`}>
          <div className={s.sale_img}>
            <img src={`http://localhost:3333/${image}`} alt="product" />
            <Button 
              title={"Add to Cart"}
              style_btn={"add_to_cart"}
              onCLickFunc={addToBasket}
            />
          </div>
          <div className={s.prices_discont}>
            {discont_price ? (
              <p className={s.discont_price}>{discont_price}
              <span style={{ fontSize: "15px" }}>$</span>
              </p>
            ) : (
              <p className={s.discont_price}>{price}
              <span style={{ fontSize: "15px" }}>$</span>
              </p>
            )}
            {discont_price && <p className={s.price}>{price}
            <span style={{ fontSize: "15px" }}>$</span>
            </p>}
            {discont_price && <p className={s.discont}>{discont}%</p>}
          </div>
          <h2>{title}</h2>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
