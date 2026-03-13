import { Link } from "react-router-dom";
import Button from "../ui/Button";
import formatPrice from "../../utils/formatPrice";


const CartSummary = ({ subtotal }) => {
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;

  return (
    <section
      className="space-y-5 rounded-3xl bg-white/95 p-6 shadow-xl transition-all duration-200 hover:shadow-2xl focus-within:ring-2 focus-within:ring-accent"
      tabIndex={0}
      aria-label="Resume de la commande"
    >
      <h3 className="text-2xl font-bold text-primary mb-2">Resume commande</h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between"><span>Sous-total</span><span>{formatPrice(subtotal)}</span></div>
        <div className="flex justify-between"><span>Livraison</span><span>0 DH</span></div>
        <div className="flex justify-between"><span>Taxes</span><span>{formatPrice(taxes)}</span></div>
      </div>
      <div className="flex justify-between border-t pt-4 text-xl font-bold text-primary">
        <span>TOTAL</span>
        <span>{formatPrice(total)}</span>
      </div>
      <Button className="w-full mt-4 text-lg py-3">Continuer commande</Button>
      <Link to="/menu" className="block text-center text-sm font-semibold text-primary mt-2">Continuer les achats</Link>
    </section>
  );
};

export default CartSummary;
