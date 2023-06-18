import React, { useEffect } from "react";
import s from "./ProductsListPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProductList } from "../../asyncAction/products";
import ProductItem from "../../components/UI/ProductItem/ProductItem";
import Filter from "../../components/UI/Filter/Filter";

function ProductsListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetProductList());
  }, []);

  useEffect(() =>{
    document.title= 'All products'
  }, [])

  const productsAll = useSelector((store) => store.products).filter(
    (el) => el.showBySale && el.showByPrices
  );

  return (
    <div className={s.wrapper}>
      <div className={s.page_title}>
        <h1>All products</h1>
      </div>
      <div className={s.filter}>
        <Filter style_input={"container_sort"} />
      </div>
      <div className={s.container_all_products}>
        {productsAll.map((el) => (
          <ProductItem style_item={"product_item"} key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default ProductsListPage;
