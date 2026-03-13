
const steps = ["Menu", "Panier", "Paiement", "Confirmation"];

const OrderProgress = ({ active = 2 }) => (
  <nav
    className="mb-8 grid grid-cols-4 gap-3"
    aria-label="Progression de la commande"
  >
    {steps.map((step, index) => (
      <div key={step} className="text-center">
        <div
          className={`mx-auto mb-2 h-2 rounded-full transition-all duration-300 ${index + 1 <= active ? "bg-accent animate-pulse" : "bg-neutral-200"}`}
          aria-current={index + 1 === active ? "step" : undefined}
        />
        <p
          className={`text-xs font-semibold ${index + 1 <= active ? "text-primary" : "text-neutral-500"}`}
          aria-label={step}
        >
          {step}
        </p>
      </div>
    ))}
  </nav>
);

export default OrderProgress;
