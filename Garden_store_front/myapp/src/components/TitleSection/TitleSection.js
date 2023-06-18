import React from "react";
import s from "./TitleSection.module.css";
import Button from "../UI/Button/Button";
import flowers from "./media/flowers.png";

function TitleSection({ scrollToSaleSection }) {
  return (
    <div className={s.wrapper}>
      <div className={s.sale_title_btn}>
        <h2>Sale </h2>
        <h3>New season</h3>
        <Button
          onCLickFunc={scrollToSaleSection}
          title={"Sale"}
          style_btn={"sale"}
        />
      </div>
      <div className={s.sale_img}>
        <div>
          <img src={flowers} alt="flowers" />
        </div>
      </div>
    </div>
  );
}

export default TitleSection;
