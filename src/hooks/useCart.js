import { useContext } from "react";
import CartContext from "../context/CartContext";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  const { state, dispatch } = context;

  return {
    ...state,
    addItem: (item) => dispatch({ type: "ADD_ITEM", payload: item }),
    removeItem: (cartKey) =>
      dispatch({ type: "REMOVE_ITEM", payload: cartKey }),
    updateQuantity: (cartKey, quantity) =>
      dispatch({ type: "UPDATE_QUANTITY", payload: { cartKey, quantity } }),
    updateCustomization: (cartKey, customization, extras) =>
      dispatch({
        type: "UPDATE_CUSTOMIZATION",
        payload: { cartKey, customization, extras },
      }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
  };
};
