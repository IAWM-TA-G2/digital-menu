import Button from "../ui/Button";
import formatPrice from "../../utils/formatPrice";


const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const extrasPrice = (item.extras || []).reduce((sum, extra) => sum + extra.price, 0);
  return (
    <article
      className="flex gap-4 rounded-2xl bg-white p-4 shadow-md transition-all duration-200 hover:shadow-xl focus-within:ring-2 focus-within:ring-accent"
      tabIndex={0}
      aria-label={`Article du panier: ${item.name}`}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        className="h-24 w-28 rounded-xl object-cover border border-neutral-200"
      />
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-primary text-lg">{item.name}</h3>
            <p className="text-xs text-neutral-400">{formatPrice(item.price + extrasPrice)}</p>
          </div>
          <button
            aria-label={`Supprimer ${item.name} du panier`}
            className="rounded-full bg-danger/10 px-3 py-1 text-danger font-semibold hover:bg-danger/20 transition"
            onClick={() => onRemove(item.cartKey)}
          >
            Supprimer
          </button>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Button
            variant="ghost"
            aria-label={`Diminuer la quantite de ${item.name}`}
            onClick={() => onUpdateQuantity(item.cartKey, item.quantity - 1)}
          >-
          </Button>
          <span className="font-bold text-lg text-primary">{item.quantity}</span>
          <Button
            variant="ghost"
            aria-label={`Augmenter la quantite de ${item.name}`}
            onClick={() => onUpdateQuantity(item.cartKey, item.quantity + 1)}
          >+
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
