import React, { useEffect } from "react";
import s from "./SaleListPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProductList } from "../../asyncAction/products";
import ProductItem from "../../components/UI/ProductItem/ProductItem";
import Filter from "../../components/UI/Filter/Filter";

function SaleListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetProductList());
  }, []);


  useEffect(() =>{
    document.title= 'All sale'
  }, [])


  const productsAll = useSelector((store) => store.products);
  const discount_products = productsAll
    .filter((el) => el.discont_price)
    .filter((el) => el.showBySale && el.showByPrices);

  return (
    <div className={s.wrapper}>
      <div className={s.page_title}>
        <h1>Products with sale</h1>
      </div>
      <div className={s.filter}>
        <Filter style_input={"sort_sale"} />
      </div>
      <div className={s.container_all_sale_products}>
        {discount_products.map((el) => (
          <ProductItem style_item={"product_item"} key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default SaleListPage;
