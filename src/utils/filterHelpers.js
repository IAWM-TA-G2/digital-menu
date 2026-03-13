export const searchDish = (dish, searchTerm) => {
  if (!searchTerm) return true;
  const target = [
    dish.name,
    dish.nameAr,
    dish.description,
    ...(dish.ingredients || []),
  ]
    .join(" ")
    .toLowerCase();
  return target.includes(searchTerm.toLowerCase());
};

export const sortDishes = (dishes, sortBy) => {
  const copied = [...dishes];
  switch (sortBy) {
    case "price-asc":
      return copied.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copied.sort((a, b) => b.price - a.price);
    case "rating":
      return copied.sort((a, b) => b.rating - a.rating);
    case "popularity":
    default:
      return copied.sort((a, b) => Number(b.isPopular) - Number(a.isPopular));
  }
};

export const applyDishFilters = (dishes, filters) => {
  const {
    category,
    search,
    isVegetarian,
    isHalal,
    allergens,
    spiceMax,
    priceRange,
    tags,
  } = filters;

  return dishes.filter((dish) => {
    if (category && dish.category !== category) return false;
    if (!searchDish(dish, search)) return false;
    if (isVegetarian && !dish.isVegetarian) return false;
    if (isHalal && !(dish.tags || []).includes("halal")) return false;
    if ((allergens || []).some((a) => (dish.allergens || []).includes(a)))
      return false;
    if (dish.spiceLevel > spiceMax) return false;
    if (dish.price < priceRange[0] || dish.price > priceRange[1]) return false;
    if (
      (tags || []).length > 0 &&
      !(tags || []).every((tag) => (dish.tags || []).includes(tag))
    ) {
      return false;
    }
    return true;
  });
};
