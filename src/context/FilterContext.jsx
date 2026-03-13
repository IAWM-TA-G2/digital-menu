import { createContext, useMemo, useReducer } from "react";

const FilterContext = createContext(null);

const initialState = {
  category: "",
  search: "",
  isVegetarian: false,
  isHalal: false,
  allergens: [],
  spiceMax: 3,
  priceRange: [20, 200],
  sortBy: "popularity",
  tags: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, [action.payload.key]: action.payload.value };
    case "TOGGLE_ALLERGEN":
      return {
        ...state,
        allergens: state.allergens.includes(action.payload)
          ? state.allergens.filter((item) => item !== action.payload)
          : [...state.allergens, action.payload]
      };
    case "TOGGLE_TAG":
      return {
        ...state,
        tags: state.tags.includes(action.payload)
          ? state.tags.filter((item) => item !== action.payload)
          : [...state.tags, action.payload]
      };
    case "RESET_FILTERS":
      return initialState;
    default:
      return state;
  }
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export default FilterContext;
