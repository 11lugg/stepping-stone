import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cardItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    // if found, increment quantity
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const updateCartCount = (cardItems) => {
  const quantityArray = cardItems.map((item) => {
    return item.quantity;
  });

  const totalQuantity = quantityArray.reduce(
    (total, cartItem) => total + cartItem,
    0
  );

  return totalQuantity;
};

export const CartContext = createContext({
  isCartOpen: false,
  toggleCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, toggleCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    setCartCount(updateCartCount(cartItems));
  }, [cartItems]);

  const value = {
    isCartOpen,
    toggleCart,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
