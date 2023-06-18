import { getProductsAction } from "../store/reducers/productsReducer";
import { getProductByIdAction } from "../store/reducers/productItemReducer";

export const fetchGetProductList = () => {
  return function (dispatch) {
    const url = "http://localhost:3333/products/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getProductsAction(data)));
  };
};

export const fetchGetProductById = (id) => {
  return function (dispatch) {
    const url = `http://localhost:3333/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getProductByIdAction(data)));
  };
};

export const fetchPostGetSale = (data) => {
  const url = "http://localhost:3333/sale/send";
  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => console.log("POST GET SALE--------", json));
};

export const fetchPostGetOrder = (data) => {
  const url = "http://localhost:3333/order/send";
  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => console.log("POST GET ORDER--------", json));
};
