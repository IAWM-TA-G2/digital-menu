import { Flame, Dumbbell, Wheat, Droplets } from "lucide-react";

const NutritionInfo = ({ calories }) => {
  const macros = {
    proteins: Math.round(calories * 0.18 / 4),
    carbs: Math.round(calories * 0.46 / 4),
    fats: Math.round(calories * 0.36 / 9)
  };

  const cards = [
    { icon: Flame, label: "Calories", value: `${calories} kcal` },
    { icon: Dumbbell, label: "Proteines", value: `${macros.proteins} g` },
    { icon: Wheat, label: "Glucides", value: `${macros.carbs} g` },
    { icon: Droplets, label: "Lipides", value: `${macros.fats} g` }
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className="rounded-2xl bg-white p-4 shadow-md">
          <card.icon className="text-accent" size={20} />
          <p className="mt-2 text-sm text-neutral-500">{card.label}</p>
          <p className="text-lg font-bold text-primary">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default NutritionInfo;
