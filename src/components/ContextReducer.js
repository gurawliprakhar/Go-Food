import React, { createContext, useContext, useReducer } from "react";

// Creating context for cart state
const CartStateContext = createContext();
const CartDispatchContext = createContext();

// Reducer function to manage cart state
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload.id);
    case "UPDATE_CART_ITEM":
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
    default:
      return state;
  }
};

// CartProvider component to manage cart state and provide context to child components
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []); // Using useReducer to manage state

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

// Custom hook to access cart state
export const useCart = () => useContext(CartStateContext);

// Custom hook to access cart dispatch function
export const useDispatchCart = () => useContext(CartDispatchContext);
