const StatCard = ({ title, value, icon: Icon, subtitle }) => (
  <div className="rounded-2xl bg-white p-4 shadow-md">
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-semibold text-neutral-600">{title}</h4>
      {Icon ? <Icon size={18} className="text-accent" /> : null}
    </div>
    <p className="mt-3 text-2xl font-bold text-primary">{value}</p>
    {subtitle ? <p className="text-xs text-neutral-500">{subtitle}</p> : null}
  </div>
);

export default StatCard;
