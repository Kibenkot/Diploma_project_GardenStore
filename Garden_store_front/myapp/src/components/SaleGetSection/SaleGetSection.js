import React from "react";
import s from "./SaleGetSection.module.css";
import gnome from "./media/gnome.png";
import Form from "../UI/Form/Form";
import { fetchPostGetSale } from "../../asyncAction/products";

function SaleGetSection() {
  return (
    <div className={s.wrapper}>
      <div className={s.gnome_img}>
        <img src={gnome} alt="gnome_img" />
      </div>
      <div className={s.text_form}>
        <div className={s.text}>
          <h2>5% off </h2>
          <p>on the first order</p>
        </div>
        <div>
          <Form
            title={"Get a discount"}
            placeholder={"+49"}
            fetchPostRequest={fetchPostGetSale}
          />
        </div>
      </div>
    </div>
  );
}

export default SaleGetSection;
