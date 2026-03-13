import { useContext } from "react";
import FilterContext from "../context/FilterContext";

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used inside FilterProvider");
  }

  const { state, dispatch } = context;

  return {
    filters: state,
    setFilter: (key, value) => {
      const current = state[key];
      // For arrays, compare contents
      if (Array.isArray(current) && Array.isArray(value)) {
        if (current.length === value.length && current.every((v, i) => v === value[i])) return;
      } else if (current === value) {
        return;
      }
      dispatch({ type: "SET_FILTER", payload: { key, value } });
    },
    toggleAllergen: (allergen) =>
      dispatch({ type: "TOGGLE_ALLERGEN", payload: allergen }),
    toggleTag: (tag) => dispatch({ type: "TOGGLE_TAG", payload: tag }),
    resetFilters: () => dispatch({ type: "RESET_FILTERS" }),
  };
};
