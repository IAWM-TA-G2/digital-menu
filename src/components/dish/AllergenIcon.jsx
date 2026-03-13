import allergenLabels from "../../utils/allergenLabels";

const colorMap = {
  gluten: "bg-amber-100 text-amber-700",
  lactose: "bg-blue-100 text-blue-700",
  noix: "bg-orange-100 text-orange-700",
  oeufs: "bg-yellow-100 text-yellow-700"
};

const AllergenIcon = ({ allergen }) => {
  const entry = allergenLabels[allergen];
  if (!entry) return null;

  return (
    <span
      title={entry.label}
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${colorMap[allergen] || "bg-neutral-100 text-neutral-700"}`}
    >
      {entry.label}
    </span>
  );
};

export default AllergenIcon;
