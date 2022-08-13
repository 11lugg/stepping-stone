import { CartContext } from "contexts/cart.context";
import { useContext } from "react";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "components/cart-icon/cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, toggleCart, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => toggleCart(!isCartOpen)}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
