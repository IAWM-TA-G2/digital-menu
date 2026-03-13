import { useMemo } from "react";
import { useParams } from "react-router-dom";
import dishes from "../data/dishes.json";
import reviews from "../data/reviews.json";
import { useCart } from "../hooks/useCart";
import DishDetail from "../components/dish/DishDetail";
import ReviewSection from "../components/dish/ReviewSection";
import SimilarDishes from "../components/dish/SimilarDishes";
import EmptyState from "../components/ui/EmptyState";

const DishDetailPage = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const dish = useMemo(() => dishes.find((item) => item.id === id), [id]);

  if (!dish) {
    return <EmptyState title="Plat introuvable" message="Ce plat n'existe pas ou n'est plus disponible." />;
  }

  const similar = dishes.filter((item) => item.category === dish.category && item.id !== dish.id).slice(0, 3);

  return (
    <div className="space-y-8">
      <DishDetail dish={dish} onAddToCart={addItem} />
      <ReviewSection dish={dish} reviews={reviews} />
      <SimilarDishes dishes={similar} onAddToCart={addItem} />
    </div>
  );
};

export default DishDetailPage;
