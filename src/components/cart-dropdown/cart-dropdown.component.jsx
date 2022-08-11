import Button from "components/button/button.component";
import "components/cart-dropdown/cart-dropdown.styles.scss";
import CartItem from "components/cart-item/cart-item.component";
import { CartContext } from "contexts/cart.context";
import { useContext } from "react";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <h2>No Cart Items</h2>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
