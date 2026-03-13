import { Link } from "react-router-dom";
import dishes from "../data/dishes.json";
import { useCart } from "../hooks/useCart";
import OrderProgress from "../components/cart/OrderProgress";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import DishCard from "../components/menu/DishCard";
import EmptyState from "../components/ui/EmptyState";

const CartPage = () => {
  const { items, totalPrice, updateQuantity, removeItem } = useCart();

  if (!items.length) {
    return (
      <EmptyState
        title="Votre panier est vide"
        message="Ajoutez des plats depuis le menu pour commencer votre commande."
        actionLabel="Voir le menu"
        onAction={() => (window.location.href = "/menu")}
      />
    );
  }

  const suggestions = dishes.filter((dish) => dish.isPopular).slice(0, 2);

  return (
    <main className="space-y-8 px-2 md:px-0">
      <OrderProgress active={2} />
      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <section className="space-y-5">
          {items.map((item) => (
            <CartItem
              key={item.cartKey}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </section>
        <CartSummary subtotal={totalPrice} />
      </div>

      <section className="rounded-2xl bg-white/90 p-6 shadow-lg transition-all duration-200">
        <h3 className="mb-4 text-2xl font-bold text-primary">Vous avez oublie ?</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {suggestions.map((dish) => (
            <DishCard key={dish.id} dish={dish} variant="compact" />
          ))}
        </div>
      </section>

      <Link to="/menu" className="text-sm font-semibold text-primary mt-4 inline-block">Continuer les achats</Link>
    </main>
  );
};

export default CartPage;
