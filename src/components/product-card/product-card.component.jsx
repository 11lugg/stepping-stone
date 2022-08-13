import Button from "components/button/button.component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "components/product-card/product-card.styles";

import { CartContext } from "contexts/cart.context";
import { useContext } from "react";
import { BUTTON_TYPE_CLASSES } from "utils/constants/constants";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.INVERTED}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
