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

const removeCartItem = (cartItems, productToRemove) => {
  // find if cardItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem) {
    // if quantity is less than one remove cart item
    if (productToRemove.quantity <= 1) {
      return cartItems.filter(
        (cartItems) => cartItems.id !== productToRemove.id
      );
    }

    // if found, decrement cart item quantity
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  // if cart item doesn't exsist don't modify cart items
  return [...cartItems];
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItems) => cartItems.id !== productToClear.id);
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

const updateTotalPrice = (cardItems) => {
  const priceArray = cardItems.map((item) => {
    return item.price * item.quantity;
  });

  const totalPrice = priceArray.reduce(
    (total, cartItem) => total + cartItem,
    0
  );

  return totalPrice;
};

export const CartContext = createContext({
  isCartOpen: false,
  toggleCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, toggleCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  useEffect(() => {
    setCartCount(updateCartCount(cartItems));
    setTotalPrice(updateTotalPrice(cartItems));
  }, [cartItems]);

  const value = {
    isCartOpen,
    toggleCart,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
