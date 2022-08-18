import { createAction } from "utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "store/categories/category.types";

export const setCategories = (categoriesArray) => {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};
