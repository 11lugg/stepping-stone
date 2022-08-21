import CategoryPreview from "components/category-preview/category-preview.component";
import Spinner from "components/spinner/spinner.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCateoriesIsLoading,
} from "store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCateoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
