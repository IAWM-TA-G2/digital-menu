const SpiceLevel = ({ level = 0 }) => (
  <div className="flex items-center gap-1" aria-label={`Niveau d'epices ${level} sur 3`}>
    {Array.from({ length: 3 }).map((_, idx) => (
      <span key={idx} className={idx < level ? "opacity-100" : "opacity-30"}>
        🌶️
      </span>
    ))}
  </div>
);

export default SpiceLevel;
