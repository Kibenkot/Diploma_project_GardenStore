import {
  filterBySale,
  filterBySelectBackName,
  filterBySelectDescendingPrice,
  filterBySelectId,
  filterBySelectName,
  filterBySelectPrice,
  filterRangerPrice,
} from "./utilsFilter";

const GET_CATEGORY_BY_ID = "GET_CATEGORY_BY_ID";
const FILTER_CATEGORY_PRODUCTS_BY_SALE = "FILTER_CATEGORY_PRODUCTS_BY_SALE";
const FILTER_CATEGORY_PRODUCTS_BY_NAME_PRICE =
  "FILTER_CATEGORY_PRODUCTS_BY_NAME_PRICE";
const FILTER_CATEGORY_PRODUCTS_BY_RANGE_PRICE =
  "FILTER_CATEGORY_PRODUCTS_BY_RANGE_PRICE";

export const categoryItemReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORY_BY_ID:
      if (action.payload.status !== "ERR") {
        const newState = action.payload;
        const newArr = newState.data.map((el) => ({
          ...el,
          showBySale: true,
          showByPrices: true,
          current_price: el.discont_price ? el.discont_price : el.price,
        }));
        return { ...newState, data: newArr };
      }
      return action.payload;

    case FILTER_CATEGORY_PRODUCTS_BY_SALE:
      // debugger
      if (action.payload) {
        const filteredData = filterBySale(state.data, action.payload);
        return { ...state, data: filteredData };
      }
      const newData = state.data.map((el) => ({ ...el, showBySale: true }));
      return { ...state, data: newData };

    case FILTER_CATEGORY_PRODUCTS_BY_NAME_PRICE:
      if (action.payload === "id") {
        const filteredData = filterBySelectId(state.data, action.payload);
        return { ...state, data: filteredData };
      } else if (action.payload === "ascending") {
        const filteredData = filterBySelectPrice(state.data, action.payload);
        return { ...state, data: filteredData };
      } else if (action.payload === "descending") {
        const filteredData = filterBySelectDescendingPrice(state.data, action.payload);
        return { ...state, data: filteredData };
      } else if (action.payload === "A_Z") {
        const filteredData = filterBySelectName(state.data, action.payload);
        return { ...state, data: filteredData };
      }else if (action.payload === "Z_A") {
        const filteredData = filterBySelectBackName(state.data, action.payload);
        return { ...state, data: filteredData };
      }
      return [...state];

    case FILTER_CATEGORY_PRODUCTS_BY_RANGE_PRICE:
      const { min, max } = action.payload;
      const filteredData = filterRangerPrice(state.data, min, max);
      return { ...state, data: filteredData };

    default:
      return state;
  }
};

export const getCategoryByIdAction = (payload) => ({
  type: GET_CATEGORY_BY_ID,
  payload,
});
export const filterCategoryProductsBySaleAction = (payload) => ({
  type: FILTER_CATEGORY_PRODUCTS_BY_SALE,
  payload,
});
export const filterCategoryProductsByNamePriceAction = (payload) => ({
  type: FILTER_CATEGORY_PRODUCTS_BY_NAME_PRICE,
  payload,
});
export const filterCategoryProductsByRangePriceAction = (payload) => ({
  type: FILTER_CATEGORY_PRODUCTS_BY_RANGE_PRICE,
  payload,
});
