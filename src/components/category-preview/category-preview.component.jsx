import ProductCard from "components/product-card/product-card.component";
import { useNavigate } from "react-router-dom";

import "components/category-preview/category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const goToCategoryHandler = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={goToCategoryHandler}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPreview;
