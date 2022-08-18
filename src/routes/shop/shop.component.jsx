import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "routes/categories-preview/categories-preview.component";
import Category from "routes/category/category.component";
import { useEffect } from "react";
import { setCategories } from "store/categories/category.action";
import { getCategoriesAndDocuments } from "utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    fetchCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
