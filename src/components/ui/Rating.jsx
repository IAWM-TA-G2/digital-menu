import { Star } from "lucide-react";

const Rating = ({ value = 0, count = 0 }) => (
  <div className="flex items-center gap-2 text-sm text-neutral-600">
    <div className="flex items-center gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Star key={idx} size={14} className={idx < Math.round(value) ? "fill-current" : ""} />
      ))}
    </div>
    <span>{value.toFixed(1)}</span>
    <span>({count} avis)</span>
  </div>
);

export default Rating;
