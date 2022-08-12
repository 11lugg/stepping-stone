import { CartContext } from "contexts/cart.context";
import { useContext } from "react";

import "components/checkout-item/checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addProductToCart = () => addItemToCart(cartItem);
  const removeProductFromCart = () => removeItemFromCart(cartItem);
  const clearProductFromCart = () => clearItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeProductFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addProductToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">£{price}</span>
      <div className="remove-button" onClick={clearProductFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
