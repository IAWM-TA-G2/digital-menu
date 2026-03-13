import { useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import dishes from "../data/dishes.json";
import { useCart } from "../hooks/useCart";
import { useFilter } from "../hooks/useFilter";
import { applyDishFilters, sortDishes } from "../utils/filterHelpers";
import FilterBar from "../components/filters/FilterBar";
import ActiveFilters from "../components/filters/ActiveFilters";
import DishList from "../components/menu/DishList";

const MenuPage = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const { addItem } = useCart();
  const { filters, setFilter, toggleAllergen, toggleTag, resetFilters } = useFilter();

  useEffect(() => {
    if (category) setFilter("category", category);
    const tag = searchParams.get("tag");
    if (tag) setFilter("tags", [tag]);
  }, [category, searchParams, setFilter]);

  const filtered = useMemo(() => sortDishes(applyDishFilters(dishes, filters), filters.sortBy), [filters]);

  const removeTag = (tag) => {
    if (tag.key === "allergen") toggleAllergen(tag.value);
    if (tag.key === "tag") toggleTag(tag.value);
    if (["category", "search", "isVegetarian", "isHalal"].includes(tag.key)) {
      setFilter(tag.key, tag.key.includes("is") ? false : "");
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <FilterBar filters={filters} setFilter={setFilter} toggleAllergen={toggleAllergen} toggleTag={toggleTag} />
      <div>
        <ActiveFilters filters={filters} onRemove={removeTag} onReset={resetFilters} />
        <DishList dishes={filtered} onAddToCart={addItem} onResetFilters={resetFilters} />
      </div>
    </div>
  );
};

export default MenuPage;
