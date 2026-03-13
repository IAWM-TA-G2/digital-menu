import { Link } from "react-router-dom";
import categories from "../../data/categories.json";

const iconMap = {
  "plats-marocains": "🍲",
  "plats-rapides": "🍔",
  boissons: "🥤",
  desserts: "🍰",
  entrees: "🥗"
};

const bgMap = {
  "plats-marocains": "bg-orange-100",
  "plats-rapides": "bg-blue-100",
  boissons: "bg-cyan-100",
  desserts: "bg-pink-100",
  entrees: "bg-emerald-100"
};

const MenuCategories = () => (
  <section>
    <h2 className="mb-4 text-2xl font-bold text-primary">Categories</h2>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/menu/${category.id}`}
          className={`rounded-2xl p-4 shadow-md transition hover:scale-[1.02] hover:shadow-xl ${bgMap[category.id]}`}
        >
          <p className="text-2xl">{iconMap[category.id]}</p>
          <h3 className="mt-2 font-bold text-primary">{category.label}</h3>
          <p className="text-sm text-neutral-600">{category.count} plats</p>
        </Link>
      ))}
    </div>
  </section>
);

export default MenuCategories;
