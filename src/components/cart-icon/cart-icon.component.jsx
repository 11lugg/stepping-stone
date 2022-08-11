import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";

import "components/cart-icon/cart-icon.styles.scss";
import { CartContext } from "contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, toggleCart, cartCount } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => toggleCart(!isCartOpen)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
