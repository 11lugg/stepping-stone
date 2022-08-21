import ProductCard from "components/product-card/product-card.component";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryContainer, Title } from "routes/category/category.styles";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCateoriesIsLoading,
} from "store/categories/category.selector";
import Spinner from "components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCateoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
