import {
  filterBySale,
  filterBySelectBackName,
  filterBySelectDescendingPrice,
  filterBySelectId,
  filterBySelectName,
  filterBySelectPrice,
  filterRangerPrice,
} from "./utilsFilter";

const GET_PRODUCTS = "GET_PRODUCTS";
const FILTER_PRODUCTS_BY_SALE = "FILTER_PRODUCTS_BY_SALE";
const FILTER_PRODUCTS_BY_NAME_PRICE = "FILTER_PRODUCTS_BY_NAME_PRICE";
const FILTER_PRODUCTS_BY_RANGE_PRICE = "FILTER_PRODUCTS_BY_RANGE_PRICE";

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload.map((el) => ({
        ...el,
        showBySale: true,
        showByPrices: true,
        current_price: el.discont_price ? el.discont_price : el.price,
      }));

    case FILTER_PRODUCTS_BY_SALE:
      if (action.payload) {
        const filteredProducts = filterBySale(state);
        return filteredProducts;
      }
      return state.map((el) => ({ ...el, showBySale: true }));

    case FILTER_PRODUCTS_BY_NAME_PRICE:
      //debugger
      if (action.payload === "id") {
        return filterBySelectId(state);
      } else if (action.payload === "ascending") {
        return filterBySelectPrice(state);
      } else if (action.payload === "descending") {
        return filterBySelectDescendingPrice(state);
      } else if (action.payload === "A_Z") {
        return filterBySelectName(state);
      }else if (action.payload === "Z_A") {
        return filterBySelectBackName(state);
      }
      return [...state];

    case FILTER_PRODUCTS_BY_RANGE_PRICE:
      const { min, max } = action.payload;
      return filterRangerPrice(state, min, max);

    default:
      return state;
  }
};

export const getProductsAction = (payload) => ({ type: GET_PRODUCTS, payload });
export const filterProductsBySaleAction = (payload) => ({
  type: FILTER_PRODUCTS_BY_SALE,
  payload,
});
export const filterProductsByNamePriceAction = (payload) => ({
  type: FILTER_PRODUCTS_BY_NAME_PRICE,
  payload,
});
export const filterProductByRangerPriceAction = (payload) => ({
  type: FILTER_PRODUCTS_BY_RANGE_PRICE,
  payload,
});
