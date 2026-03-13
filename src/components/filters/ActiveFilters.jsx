const ActiveFilters = ({ filters, onRemove, onReset }) => {
  const tags = [];
  if (filters.category) tags.push({ key: "category", value: filters.category, label: `Categorie: ${filters.category}` });
  if (filters.search) tags.push({ key: "search", value: filters.search, label: `Recherche: ${filters.search}` });
  if (filters.isVegetarian) tags.push({ key: "isVegetarian", value: true, label: "Vegetarien" });
  if (filters.isHalal) tags.push({ key: "isHalal", value: true, label: "Halal" });
  filters.allergens.forEach((allergen) => tags.push({ key: "allergen", value: allergen, label: `Sans ${allergen}` }));
  filters.tags.forEach((tag) => tags.push({ key: "tag", value: tag, label: tag }));

  if (!tags.length) return null;

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <button
          key={`${tag.key}-${tag.value}`}
          onClick={() => onRemove(tag)}
          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
        >
          {tag.label} ×
        </button>
      ))}
      <button onClick={onReset} className="text-sm font-semibold text-danger">
        Reset
      </button>
    </div>
  );
};

export default ActiveFilters;
