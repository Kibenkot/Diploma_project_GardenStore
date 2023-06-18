import React from "react";
import s from "./CategoryItem.module.css";
import { Link } from "react-router-dom";

function CategoryItem({ id, title, image }) {
  return (
    <div className={s.wrapper}>
      <Link to={`/category/${id}`}>
        <img src={`http://localhost:3333/${image}`} alt="category" />
        <div className={s.title}>
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;
