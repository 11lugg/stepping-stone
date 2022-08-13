import { CartContext } from "contexts/cart.context";
import { useContext } from "react";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "components/checkout-item/checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addProductToCart = () => addItemToCart(cartItem);
  const removeProductFromCart = () => removeItemFromCart(cartItem);
  const clearProductFromCart = () => clearItemFromCart(cartItem);
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
