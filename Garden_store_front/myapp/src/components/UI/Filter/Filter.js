import React, { useState } from "react";
import s from "./Filter.module.css";
import { useDispatch } from "react-redux";
import {
  filterProductByRangerPriceAction,
  filterProductsByNamePriceAction,
  filterProductsBySaleAction,
} from "../../../store/reducers/productsReducer";
import { useLocation } from "react-router-dom";
import {
  filterCategoryProductsByNamePriceAction,
  filterCategoryProductsByRangePriceAction,
  filterCategoryProductsBySaleAction,
} from "../../../store/reducers/categoryItemReducer";

function Filter({ style_input }) {
  const [{ min = "", max = "" }, setRange] = useState({});

  //==========
  const { pathname } = useLocation();
  console.log("Pathname", pathname);

  const handleSaleFilter = (e) => {
    if (pathname.includes("category")) {
      dispatch(filterCategoryProductsBySaleAction(e.target.checked));
      return;
    } else if (pathname.includes("products")) {
      dispatch(filterProductsBySaleAction(e.target.checked));
      return;
    }
  };

  //===========
  const dispatch = useDispatch();
  //===========

  const order_products = (e) => {
    if (pathname.includes("category")) {
      dispatch(filterCategoryProductsByNamePriceAction(e.target.value));
      return;
    } else if (pathname.includes("products") || pathname.includes("sale")) {
      dispatch(filterProductsByNamePriceAction(e.target.value));
      return;
    }
  };

  //============
  const handleRange = (e) => {
    const targetInput = e.target.name;
    const newValue = e.target.value;

    setRange((prevRange) => ({
      ...prevRange,
      [targetInput]: newValue,
    }));

    const range = {
      min: targetInput === "min" ? newValue : min || 0,
      max: targetInput === "max" ? newValue : max || Infinity,
    };

    if (pathname.includes("category")) {
      dispatch(filterCategoryProductsByRangePriceAction(range));
      return;
    } else if (pathname.includes("products") || pathname.includes("sale")) {
      dispatch(filterProductByRangerPriceAction(range));
      return;
    }
  };

  return (
    <div className={s.wrapper_sort}>
      <label className={s.container_sort}>
        Price:
        <input
          className={s.price_input}
          onChange={handleRange}
          type="number"
          min="0"
          placeholder="from"
          name="min"
        />
        <input
          className={s.price_input}
          onChange={handleRange}
          type="number"
          max="Infinity"
          placeholder="to"
          name="max"
        />
      </label>

      <label className={`${s[style_input]}`}>
        Discounted items:
        <input
          className={s.discount_input}
          onClick={handleSaleFilter}
          type="checkbox"
        />
      </label>

      <label className={s.container_sort}>
        Sorted:
        <select className={s.select_input} onInput={order_products}>
          <option value="id">by default</option>
          <option value="ascending">by price ascending</option>
          <option value="descending">by price descending</option>
          <option value="A_Z">by name A-Z</option>
          <option value="Z_A">by name Z-A</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
