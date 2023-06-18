const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";

export const productItemReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_ID: {
      if (Array.isArray(action.payload)) {
        return action.payload[0];
      }
      return action.payload;
    }

    default:
      return state;
  }
};

export const getProductByIdAction = (payload) => ({
  type: GET_PRODUCT_BY_ID,
  payload,
});
