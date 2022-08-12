import CheckoutItem from "components/checkout-item/checkout-item.component";
import { CartContext } from "contexts/cart.context";
import { useContext } from "react";
import { CHECKOUT_HEADER } from "utils/constants/constants";

import "routes/checkout/checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {CHECKOUT_HEADER.map((header, index) => {
          return (
            <div key={index} className="header-block">
              <span>{header}</span>
            </div>
          );
        })}
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <span className="total">Total: £{totalPrice}</span>
    </div>
  );
};

export default Checkout;
