import categories from "../../data/categories.json";
import PriceSlider from "./PriceSlider";

const allergens = ["gluten", "lactose", "noix", "oeufs"];
const quickTags = ["beldi", "healthy", "grande-faim", "petit-budget", "sur-le-pouce", "local"];

const FilterBar = ({ filters, setFilter, toggleAllergen, toggleTag }) => (
  <aside className="space-y-5 rounded-2xl bg-white p-5 shadow-md">
    <div>
      <label htmlFor="search" className="mb-1 block text-sm font-semibold text-primary">Recherche</label>
      <input
        id="search"
        value={filters.search}
        onChange={(e) => setFilter("search", e.target.value)}
        placeholder="Nom, ingredients, description..."
        className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm"
      />
    </div>

    <div>
      <p className="mb-2 text-sm font-semibold text-primary">Categorie</p>
      <div className="space-y-2">
        <label className="flex items-center justify-between text-sm">
          <span>Toutes</span>
          <input type="radio" checked={filters.category === ""} onChange={() => setFilter("category", "")} />
        </label>
        {categories.map((category) => (
          <label key={category.id} className="flex items-center justify-between text-sm">
            <span>
              {category.label} ({category.count})
            </span>
            <input
              type="radio"
              checked={filters.category === category.id}
              onChange={() => setFilter("category", category.id)}
            />
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={filters.isVegetarian}
          onChange={(e) => setFilter("isVegetarian", e.target.checked)}
        />
        Vegetarien
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={filters.isHalal} onChange={(e) => setFilter("isHalal", e.target.checked)} />
        Halal
      </label>
    </div>

    <div>
      <p className="mb-2 text-sm font-semibold text-primary">Allergenes a exclure</p>
      <div className="grid grid-cols-2 gap-2">
        {allergens.map((allergen) => (
          <label key={allergen} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={filters.allergens.includes(allergen)}
              onChange={() => toggleAllergen(allergen)}
            />
            {allergen}
          </label>
        ))}
      </div>
    </div>

    <div>
      <p className="mb-2 text-sm font-semibold text-primary">Niveau epices max: {filters.spiceMax}</p>
      <input
        type="range"
        min="0"
        max="3"
        value={filters.spiceMax}
        onChange={(e) => setFilter("spiceMax", Number(e.target.value))}
        className="w-full"
      />
    </div>

    <div>
      <p className="mb-2 text-sm font-semibold text-primary">Fourchette de prix</p>
      <PriceSlider value={filters.priceRange} onChange={(value) => setFilter("priceRange", value)} />
    </div>

    <div>
      <label htmlFor="sortBy" className="mb-1 block text-sm font-semibold text-primary">Trier par</label>
      <select
        id="sortBy"
        className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm"
        value={filters.sortBy}
        onChange={(e) => setFilter("sortBy", e.target.value)}
      >
        <option value="popularity">Popularite</option>
        <option value="price-asc">Prix croissant</option>
        <option value="price-desc">Prix decroissant</option>
        <option value="rating">Note</option>
      </select>
    </div>

    <div>
      <p className="mb-2 text-sm font-semibold text-primary">Tags rapides</p>
      <div className="flex flex-wrap gap-2">
        {quickTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              filters.tags.includes(tag) ? "bg-accent text-primary" : "bg-neutral-100 text-neutral-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  </aside>
);

export default FilterBar;
