import DishCard from "./DishCard";
import EmptyState from "../ui/EmptyState";

const DishList = ({ dishes, onAddToCart, onResetFilters }) => {
  if (!dishes.length) {
    return (
      <EmptyState
        title="Aucun plat trouve"
        message="Essayez de modifier vos filtres pour decouvrir d'autres options."
        actionLabel="Reinitialiser les filtres"
        onAction={onResetFilters}
      />
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default DishList;
