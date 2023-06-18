import React from "react";
import s from "./CatalogSection.module.css";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetCategories } from "../../asyncAction/categories";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Link } from "react-router-dom";

function CatalogSection() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetCategories());
  }, []);

  const categoriesAll = useSelector((store) => store.categories);
  // console.log("All_Categories", categoriesAll);

  const categoriesRender = categoriesAll.slice(0, 4);
  // console.log("CategoriesRender", categoriesRender);

  return (
    <div className={s.wrapper}>
      <div className={s.section_title_btn}>
        <h2>Catalog</h2>
        <Link to="/category">
          <Button title={"All categories"} style_btn={"all_categories"} />
        </Link>
      </div>
      <div className={s.section_catalog}>
        {categoriesRender.map((el) => {
          return <CategoryItem key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
}

export default CatalogSection;
