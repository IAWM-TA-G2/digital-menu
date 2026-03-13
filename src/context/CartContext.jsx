import { createContext, useEffect, useMemo, useReducer } from "react";

const CartContext = createContext(null);

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

const computeTotals = (items) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => {
    const extrasPrice = (item.extras || []).reduce((eSum, extra) => eSum + extra.price, 0);
    return sum + (item.price + extrasPrice) * item.quantity;
  }, 0);

  return { totalItems, totalPrice };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && JSON.stringify(item.customization) === JSON.stringify(action.payload.customization)
      );

      let items;
      if (existing) {
        items = state.items.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) } : item
        );
      } else {
        items = [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }];
      }

      return { ...state, items, ...computeTotals(items) };
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter((item) => item.cartKey !== action.payload);
      return { ...state, items, ...computeTotals(items) };
    }
    case "UPDATE_QUANTITY": {
      const items = state.items
        .map((item) =>
          item.cartKey === action.payload.cartKey
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
        .filter((item) => item.quantity > 0);
      return { ...state, items, ...computeTotals(items) };
    }
    case "UPDATE_CUSTOMIZATION": {
      const items = state.items.map((item) =>
        item.cartKey === action.payload.cartKey
          ? { ...item, customization: action.payload.customization, extras: action.payload.extras }
          : item
      );
      return { ...state, items, ...computeTotals(items) };
    }
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

const getInitialState = () => {
  try {
    const stored = localStorage.getItem("dar-zitoun-cart");
    if (!stored) return initialState;
    const parsed = JSON.parse(stored);
    return { ...parsed, ...computeTotals(parsed.items || []) };
  } catch {
    return initialState;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, getInitialState);

  useEffect(() => {
    localStorage.setItem("dar-zitoun-cart", JSON.stringify(state));
  }, [state]);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
