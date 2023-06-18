const defaultState = JSON.parse(localStorage.getItem("basket")) ?? [];

const ADD_TO_BASKET = "ADD_TO_BASKET";
const INCREMENT_COUNT_BASKET = "INCREMENT_COUNT_BASKET";
const DECREMENT_COUNT_BASKET = "DECREMENT_COUNT_BASKET";
const DELETE_PRODUCT_BASKET = "DELETE_PRODUCT_BASKET";
const CLEAN_BASKET = "CLEAN_BASKET";

const checkProduct = (state, payload) => {
  const productAvailable = state.find((el) => el.id === payload.id);
  if (productAvailable) {
    productAvailable.count++;
    return [...state];
  } else {
    return [...state, { ...payload, count: 1 }];
  }
};

export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      // debugger
      return checkProduct(state, action.payload);

    case INCREMENT_COUNT_BASKET:
      const incrCount = state.find((el) => el.id === action.payload);
      incrCount.count++;
      return [...state];

    case DECREMENT_COUNT_BASKET:
      const decrCount = state.find((el) => el.id === action.payload);
      if (decrCount.count === 1) {
        state = state.filter((el) => el.id !== action.payload);
      } else {
        decrCount.count--;
      }
      return [...state];

    case DELETE_PRODUCT_BASKET:
      return [...state.filter((el) => el.id !== action.payload)];

    case CLEAN_BASKET:
      return [];

    default:
      return state;
  }
};

export const addToBasketAction = (payload) => ({
  type: ADD_TO_BASKET,
  payload,
});
export const incrementCountBasketAction = (payload) => ({
  type: INCREMENT_COUNT_BASKET,
  payload,
});
export const decrementCountBasketAction = (payload) => ({
  type: DECREMENT_COUNT_BASKET,
  payload,
});
export const deleteProductBasketAction = (payload) => ({
  type: DELETE_PRODUCT_BASKET,
  payload,
});
export const cleanBasketAction = () => ({ type: CLEAN_BASKET });

