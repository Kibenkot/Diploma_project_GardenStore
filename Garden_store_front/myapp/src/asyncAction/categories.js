import { getCategoriesAction } from "../store/reducers/categoriesReducer";
import { getCategoryByIdAction } from "../store/reducers/categoryItemReducer";

export const fetchGetCategories = () => {
  return function (dispatch) {
    const url = "http://localhost:3333/categories/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getCategoriesAction(data)));
  };
};

export const fetchGetCategoryById = (id) => {
  return function (dispatch) {
    const url = `http://localhost:3333/categories/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getCategoryByIdAction(data)));
  };
};
