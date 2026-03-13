const badgeStyles = {
  default: "bg-neutral-100 text-neutral-700",
  popular: "bg-danger text-white",
  vegetarian: "bg-success text-white",
  halal: "bg-primary text-white",
  info: "bg-sky-100 text-sky-700"
};

const Badge = ({ children, variant = "default", className = "" }) => (
  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[variant]} ${className}`}>
    {children}
  </span>
);

export default Badge;
