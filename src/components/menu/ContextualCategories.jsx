import { useNavigate } from "react-router-dom";

const cards = [
  { label: "Petite faim", emoji: "🍜", tag: "petite-faim" },
  { label: "Grande faim", emoji: "🍜🍜", tag: "grande-faim" },
  { label: "Healthy", emoji: "🥗", tag: "healthy" },
  { label: "Sur le pouce", emoji: "⚡", tag: "sur-le-pouce" },
  { label: "Petit budget", emoji: "💸", tag: "petit-budget" },
  { label: "Cuisine Marocaine", emoji: "🇲🇦", tag: "local" }
];

const ContextualCategories = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-primary">Selon votre envie</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <button
            key={card.tag}
            onClick={() => navigate(`/menu?tag=${card.tag}`)}
            className="rounded-2xl bg-white p-4 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-2xl">{card.emoji}</p>
            <h3 className="mt-2 font-semibold text-primary">{card.label}</h3>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ContextualCategories;
