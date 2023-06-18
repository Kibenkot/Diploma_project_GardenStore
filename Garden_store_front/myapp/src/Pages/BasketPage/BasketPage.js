import s from "./BasketPage.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import BasketList from "../../components/BasketList/BasketList";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function BasketPage() {
  const basket = useSelector((store) => store.basket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() =>{
    document.title= 'Basket'
  }, [])

  return (
    <div className={s.wrapper}>
      <div className={s.page_title}>
        <h1>Shopping cart</h1>
      </div>
      <Link to="/products">
        <div className={s.container_back_store}>
          <p>Back to the store</p>
          <IoIosArrowForward className={s.container_back_store_icon} />
        </div>
      </Link>
      <div className={s.container_goods_total}>
        <div className={s.goods}>
          <BasketList />
        </div>
        <div className={s.total}>
          <OrderDetails />
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
