import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "store/cart/cart.action";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "components/checkout-item/checkout-item.styles";
import { selectCartItems } from "store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeProductFromCart = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const clearProductFromCart = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeProductFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addProductToCart}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>£{price}</BaseSpan>
      <RemoveButton onClick={clearProductFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
