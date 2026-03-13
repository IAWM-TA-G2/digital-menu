import { useMemo, useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Rating from "../ui/Rating";
import AllergenIcon from "./AllergenIcon";
import SpiceLevel from "./SpiceLevel";
import NutritionInfo from "./NutritionInfo";
import formatPrice from "../../utils/formatPrice";

const extrasCatalog = [
  { id: "extra-cheese", label: "Fromage extra", price: 6 },
  { id: "extra-fries", label: "Portion frites", price: 8 },
  { id: "extra-sauce", label: "Sauce maison", price: 3 }
];

const DishDetail = ({ dish, onAddToCart }) => {
  const [removedIngredients, setRemovedIngredients] = useState([]);
  const [spice, setSpice] = useState(dish.spiceLevel);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const extrasPrice = useMemo(() => extras.reduce((sum, extra) => sum + extra.price, 0), [extras]);
  const total = (dish.price + extrasPrice) * quantity;

  const toggleRemoved = (ingredient) => {
    setRemovedIngredients((prev) =>
      prev.includes(ingredient) ? prev.filter((item) => item !== ingredient) : [...prev, ingredient]
    );
  };

  const toggleExtra = (extra) => {
    setExtras((prev) => (prev.some((item) => item.id === extra.id) ? prev.filter((item) => item.id !== extra.id) : [...prev, extra]));
  };

  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-2xl bg-white shadow-md">
        <img src={dish.imageUrl} alt={dish.name} className="h-72 w-full object-cover" />
      </div>

      <div className="space-y-3 rounded-2xl bg-white p-6 shadow-md">
        <div className="flex flex-wrap gap-2">
          {dish.isPopular ? <Badge variant="popular">Populaire</Badge> : null}
          {dish.isVegetarian ? <Badge variant="vegetarian">Vegetarien</Badge> : null}
          {(dish.tags || []).includes("halal") ? <Badge variant="halal">Halal</Badge> : null}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-3xl font-bold text-primary">{dish.name}</h1>
          <p className="text-2xl font-bold text-accent">{formatPrice(dish.price)}</p>
        </div>
        <Rating value={dish.rating} count={dish.reviewCount} />
        <div className="flex flex-wrap items-center gap-3">
          <SpiceLevel level={dish.spiceLevel} />
          {(dish.allergens || []).map((allergen) => (
            <AllergenIcon key={allergen} allergen={allergen} />
          ))}
        </div>
        <p className="text-neutral-600">{dish.description}</p>
      </div>

      <section className="space-y-3 rounded-2xl bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold text-primary">Ingredients</h2>
        <div className="flex flex-wrap gap-2">
          {dish.ingredients.map((ingredient) => (
            <button
              key={ingredient}
              className={`rounded-full border px-3 py-1 text-sm ${removedIngredients.includes(ingredient) ? "border-danger text-danger line-through" : "border-neutral-200"}`}
              onClick={() => toggleRemoved(ingredient)}
            >
              {ingredient}
            </button>
          ))}
        </div>
      </section>

      <NutritionInfo calories={dish.calories} />

      <section className="space-y-4 rounded-2xl bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold text-primary">Personnalisation</h2>
        <div className="flex gap-2">
          {[
            { label: "Doux", value: 0 },
            { label: "Normal", value: 1 },
            { label: "Epice", value: 2 },
            { label: "Tres epice", value: 3 }
          ].map((level) => (
            <button
              key={level.value}
              className={`rounded-xl px-3 py-2 text-sm ${spice === level.value ? "bg-primary text-white" : "bg-neutral-100"}`}
              onClick={() => setSpice(level.value)}
            >
              {level.label}
            </button>
          ))}
        </div>

        <div className="grid gap-2 md:grid-cols-3">
          {extrasCatalog.map((extra) => {
            const active = extras.some((item) => item.id === extra.id);
            return (
              <button
                key={extra.id}
                className={`rounded-xl border p-3 text-left ${active ? "border-accent bg-accent/10" : "border-neutral-200"}`}
                onClick={() => toggleExtra(extra)}
              >
                <p className="font-semibold">{extra.label}</p>
                <p className="text-sm text-neutral-600">+{formatPrice(extra.price)}</p>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg bg-neutral-100 px-3 py-1" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
          <span className="font-semibold">{quantity}</span>
          <button className="rounded-lg bg-neutral-100 px-3 py-1" onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>

        <Button
          className="w-full transition-transform duration-150 active:scale-[0.98]"
          onClick={() =>
            onAddToCart({
              ...dish,
              quantity,
              extras,
              customization: { removedIngredients, spice },
              cartKey: `${dish.id}-${Date.now()}`
            })
          }
        >
          Ajouter au panier - {formatPrice(total)}
        </Button>
      </section>
    </div>
  );
};

export default DishDetail;
