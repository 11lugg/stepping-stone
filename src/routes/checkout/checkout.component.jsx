import CheckoutItem from "components/checkout-item/checkout-item.component";
import { CHECKOUT_HEADER } from "utils/constants/constants";
import { useSelector } from "react-redux";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "routes/checkout/checkout.styles";
import { selectCartItems, selectCartTotal } from "store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

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
