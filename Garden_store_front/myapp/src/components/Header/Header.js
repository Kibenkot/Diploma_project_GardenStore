import React, { useState } from "react";
import s from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./media/logo_garden.png";
import basket_1 from "./media/basket_1.svg";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


function Header() {

  const [isTopMenu, setTopMenu] = useState(false)

  const basket = useSelector((store) => store.basket);
  const total_count = basket.reduce((acc, el) => acc + el.count, 0);

  return (
    <header style={{ zIndex: 9000 }}>
      <div className={s.wrapper}>
        <div className={s.logo_btn}>
          <img src={logo} alt="logo" />
          <Link to="/category" className={s.mobile_btn_category}>
            <Button title={"Catalog"} style_btn={"catalog"} />
          </Link>
        </div>
        <div className={isTopMenu ? [s.nav, s.active].join(' ') : [s.nav]}>
          <NavLink
            onClick={()=>setTopMenu(!isTopMenu)} 
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            MainPage
          </NavLink>
          <NavLink
            onClick={()=>setTopMenu(!isTopMenu)} 
            to="/products"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            All products
          </NavLink>
          <NavLink
            onClick={()=>setTopMenu(!isTopMenu)}
            to="/sale"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            All sales
          </NavLink>

          <NavLink
            onClick={()=>setTopMenu(!isTopMenu)}
            to="/category"
            className={[s.mobile,({ isActive }) => (isActive ? "active-link" : "")].join(' ')}
          >
            Category
          </NavLink>
          <NavLink
            onClick={()=>setTopMenu(!isTopMenu)}
            to="/basket"
            className={[s.mobile,({ isActive }) => (isActive ? "active-link" : "")].join(' ')}
          >
            Cart
          </NavLink>
        </div>

        <div className={s.basket}>
          <Link to="/basket">
            <img className={s.icon_basket} src={basket_1} alt="basket" />
            <div className={s.basket_count}>
              <p>{total_count}</p>
            </div>
          </Link>
        </div>
        <div onClick={()=>setTopMenu(!isTopMenu)} className={s.mobile_btn}>
           {
              isTopMenu ? <AiOutlineClose className={s.mobile_btn_close}/> : <AiOutlineMenu  />
            }
        </div>
      </div>
    </header>
  );
}

export default Header;
