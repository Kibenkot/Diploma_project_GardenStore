import React, { useEffect } from "react";
import s from "./ProductInfoPage.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchGetProductById } from "../../asyncAction/products";
import Button from "../../components/UI/Button/Button";
import notFound_404 from "../NotFoundPage/media/notFound_404.png";
import { addToBasketAction } from "../../store/reducers/basketReducer";

function ProductInfoPage() {
  const { pathname } = useLocation();
  const idProduct = pathname.split("/")[2];

  // console.log("ID_Product_______", idProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetProductById(idProduct));
    window.scrollTo(0, 0);
  }, []);

  const productByID = useSelector((store) => store.productItem);
  // console.log("PRODUCT_BY_ID", productByID);

  const discont = Math.round(
    (productByID.discont_price * 100) / productByID.price - 100
  );

  const addToBasket = (e) => {
    e.preventDefault();
    dispatch(addToBasketAction({ ...productByID }));
  };

  useEffect(() =>{
    document.title = `Product: ${productByID.title}` 
  }, [productByID])

  return (
    <>
      {productByID.status ? (
        <img className={s.not_found} src={notFound_404} alt="notFound_404" />
      ) : (
        <div>
          <div className={s.page_title}>
            <h1>{productByID.title}</h1>
          </div>
          <div className={s.container_img_info}>
            <div className={s.page_img}>
              <img
                src={`http://localhost:3333/${productByID.image}`}
                alt="product"
              />
            </div>
            <div className={s.page_info_btn}>
              <div className={s.prices_discont_item}>
                {productByID.discont_price ? (
                  <p className={s.discont_price_item}>
                    {productByID.discont_price}
                    <span style={{ fontSize: "25px" }}>$</span>
                  </p>
                ) : (
                  <p className={s.discont_price_item}>{productByID.price}
                  <span style={{ fontSize: "25px" }}>$</span>
                  </p>
                )}
                {productByID.discont_price && (
                  <p className={s.price_item}>{productByID.price}
                  <span style={{ fontSize: "25px" }}>$</span>
                  </p>
                )}
                {productByID.discont_price && (
                  <p className={s.discont_item}>{discont}%</p>
                )}
              </div>
              <div className={s.item_btn}>
                <Button
                  title={"To cart"}
                  style_btn={"to_cart"}
                  onCLickFunc={addToBasket}
                />
              </div>
              <h4 className={s.description_title}>{"Description"}</h4>
              <p className={s.description}>{productByID.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductInfoPage;
