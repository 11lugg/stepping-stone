import Button from "components/button/button.component";
import { addItemToCart } from "store/cart/cart.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "components/product-card/product-card.styles";

import { BUTTON_TYPE_CLASSES } from "utils/constants/constants";
import { selectCartItems } from "store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>£{price}</Price>
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
