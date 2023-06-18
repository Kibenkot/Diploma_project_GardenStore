import React, { useEffect } from "react";
import s from "./CategoryPage.module.css";
import { useDispatch } from "react-redux";
import { fetchGetCategoryById } from "../../asyncAction/categories";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductItem from "../../components/UI/ProductItem/ProductItem";
import Filter from "../../components/UI/Filter/Filter";
import notFound_404 from "../NotFoundPage/media/notFound_404.png";

function CategoryPage() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

  // console.log("pathname-----", pathname);
  // console.log("ID-------------", id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetCategoryById(id));
    window.scrollTo(0, 0);
  }, []);

  
  const categoryALL = useSelector((store) => store.categoryItem);
  const category = useSelector((store) => store.categoryItem.category) || {};
  const dataCategory = useSelector((store) => store.categoryItem.data) || [];
  const renderDataCategory = dataCategory.filter(
    (el) => el.showBySale && el.showByPrices
  );

  // console.log("categoryAll-----", categoryALL);
  // console.log("category---", category);
  // console.log("dataCategory---", dataCategory);
  // console.log("renderDataCategory-----", renderDataCategory);

  useEffect(() =>{
    document.title = `Category: ${category.title}` 
  }, [category])



  return (
    <>
      {categoryALL.status ? (
        <img className={s.not_found} src={notFound_404} alt="notFound_404" />
      ) : (
        <div className={s.wrapper}>
          <div className={s.page_title}>
            <h1>{category.title}</h1>
          </div>
          <div className={s.container_filter}>
            <Filter style_input={"container_sort"} />
          </div>
          <div className={s.container_products}>
            {renderDataCategory.map((el) => (
              <ProductItem style_item={"product_item"} key={el.id} {...el} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CategoryPage;
