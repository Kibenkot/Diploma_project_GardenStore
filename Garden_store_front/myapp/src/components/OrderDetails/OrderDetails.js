import React from "react";
import s from "./OrderDetails.module.css";
import { useSelector } from "react-redux";
import Form from "../UI/Form/Form";
import { fetchPostGetOrder } from "../../asyncAction/products";

function OrderDetails() {
  const basket = useSelector((store) => store.basket);
  const total_sum = basket
    .reduce(
      (acc, el) =>
        acc + el.count * (el.discont_price ? el.discont_price : el.price),
      0
    )
    .toFixed(2);

  return (
    <div className={s.wrapper}>
      <div className={s.container_title}>
        <h2>Order details</h2>
      </div>
      <div className={s.container_total}>
        <p className={s.total_title}>Total</p>
        <p className={s.total_sum}>
          {total_sum} <span style={{ fontSize: "15px" }}>$</span>
        </p>
      </div>
      <div>
        <Form
          style_form_btn={"order_btn"}
          style_form_input={"order_input"}
          title={"Order"}
          placeholder={"Phone number"}
          fetchPostRequest={fetchPostGetOrder}
        />
      </div>
    </div>
  );
}

export default OrderDetails;
