import Button from "components/button/button.component";
import CartItem from "components/cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "components/cart-dropdown/cart-dropdown.styles";
import { selectCartItems } from "store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>No Cart Items</EmptyMessage>
        )}
      </CartItems>
      <Button type="button" onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
