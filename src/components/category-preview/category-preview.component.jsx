import ProductCard from "components/product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "components/category-preview/category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
