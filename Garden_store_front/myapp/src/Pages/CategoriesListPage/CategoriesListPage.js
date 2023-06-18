import React, { useEffect } from "react";
import s from "./CategoriesListPage.module.css";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetCategories } from "../../asyncAction/categories";

function CategoriesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetCategories());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() =>{
    document.title= 'All categories'
  }, [])

  const categoriesAll = useSelector((store) => store.categories);

  return (
    <div className={s.wrapper}>
      <div className={s.page_title}>
        <h1>Categories</h1>
      </div>
      <div className={s.container_categories}>
        {categoriesAll.map((el) => (
          <CategoryItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
