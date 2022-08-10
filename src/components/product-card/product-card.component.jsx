import Button from "components/button/button.component";
import "components/product-card/product-card.styles.scss";
import { BUTTON_TYPE_CLASSES } from "utils/constants/constants";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">£{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.INVERTED}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
