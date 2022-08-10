import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";

import "components/cart-icon/cart-icon.styles.scss";
import { CartContext } from "contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, toggleCart } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => toggleCart(!isCartOpen)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
