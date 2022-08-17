import { createContext, useReducer } from "react";
import { createAction } from "utils/reducer/reducer.util";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem) {
    if (productToRemove.quantity <= 1) {
      return cartItems.filter(
        (cartItems) => cartItems.id !== productToRemove.id
      );
    }

    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

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

const CART_ACTION_ITEMS = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_ITEMS.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTION_ITEMS.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, totalPrice, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = updateCartCount(newCartItems);
    const newCartTotal = updateTotalPrice(newCartItems);

    dispatch(
      createAction(CART_ACTION_ITEMS.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalPrice: newCartTotal,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    updateCartItemsReducer(newCartItems);
  };

  const toggleCart = (bool) => {
    dispatch(createAction(CART_ACTION_ITEMS.SET_IS_CART_OPEN, bool));
  };

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
