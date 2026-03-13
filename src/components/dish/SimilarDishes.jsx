import DishCard from "../menu/DishCard";

const SimilarDishes = ({ dishes = [], onAddToCart }) => (
  <section>
    <h3 className="mb-4 text-xl font-bold text-primary">Plats similaires</h3>
    <div className="grid gap-4 md:grid-cols-3">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} onAddToCart={onAddToCart} />
      ))}
    </div>
  </section>
);

export default SimilarDishes;
