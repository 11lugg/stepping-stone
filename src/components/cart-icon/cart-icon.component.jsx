import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "store/cart/cart.selector";
import { toggleCart } from "store/cart/cart.action";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "components/cart-icon/cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <CartIconContainer onClick={() => dispatch(toggleCart(!isCartOpen))}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
