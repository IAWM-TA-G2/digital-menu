import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import Rating from "../ui/Rating";
import Button from "../ui/Button";
import SpiceLevel from "../dish/SpiceLevel";
import AllergenIcon from "../dish/AllergenIcon";
import formatPrice from "../../utils/formatPrice";

const DishCard = ({ dish, onAddToCart, variant = "default" }) => {
  const compact = variant === "compact";

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/60 bg-white/85 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative">
        <img loading="lazy" src={dish.imageUrl} alt={dish.name} className={`w-full object-cover ${compact ? "h-40" : "h-52"}`} />
        <div className="absolute left-3 top-3 flex gap-2">
          {dish.isPopular ? <Badge variant="popular">Populaire</Badge> : null}
          {dish.isVegetarian ? <Badge variant="vegetarian">Vegetarien</Badge> : null}
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-r from-primary to-primary-light p-3 text-white transition group-hover:translate-y-0">
          <Link to={`/dish/${dish.id}`} className="text-sm font-semibold">Voir le plat</Link>
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-primary">{dish.name}</h3>
            <p className="text-xs text-neutral-500">{dish.nameAr}</p>
          </div>
          <p className="font-bold text-accent">{formatPrice(dish.price)}</p>
        </div>

        <Rating value={dish.rating} count={dish.reviewCount} />
        <SpiceLevel level={dish.spiceLevel} />

        <div className="flex flex-wrap gap-2">
          {(dish.allergens || []).slice(0, 3).map((allergen) => (
            <AllergenIcon key={allergen} allergen={allergen} />
          ))}
        </div>

        {onAddToCart ? (
          <Button variant="secondary" className="w-full" onClick={() => onAddToCart({ ...dish, cartKey: `${dish.id}-${Date.now()}` })}>
            Ajouter
          </Button>
        ) : null}
      </div>
    </article>
  );
};

export default DishCard;
