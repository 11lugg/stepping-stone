import CheckoutItem from "components/checkout-item/checkout-item.component";
import { CartContext } from "contexts/cart.context";
import { useContext } from "react";
import { CHECKOUT_HEADER } from "utils/constants/constants";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "routes/checkout/checkout.styles";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {CHECKOUT_HEADER.map((header, index) => {
          return (
            <HeaderBlock key={index}>
              <span>{header}</span>
            </HeaderBlock>
          );
        })}
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <Total>Total: £{totalPrice}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
