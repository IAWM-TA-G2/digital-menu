import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useCart } from "../../hooks/useCart";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Menu" },
  { to: "/reservation", label: "Reserver" },
  { to: "/stats", label: "Stats" }
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-white/40 bg-white/80 backdrop-blur-xl shadow-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-12">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-primary md:text-3xl flex items-center gap-2">
          <span className="mr-2 text-3xl">🍜</span>
          Dar Zitoun
        </Link>

        <nav className="glass-panel hidden items-center gap-4 rounded-full px-3 py-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-lg font-semibold transition-all duration-200 ${
                  isActive ? "bg-primary text-white shadow-md" : "text-primary hover:bg-white hover:text-accent"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Rechercher" className="rounded-full bg-white/80 p-3 shadow-md hover:bg-white transition-all duration-200">
            <Search size={22} />
          </button>
          <Link aria-label="Panier" to="/cart" className="relative rounded-full bg-white/80 p-3 shadow-md hover:bg-white transition-all duration-200">
            <ShoppingCart size={22} />
            <span className="absolute -right-2 -top-2 rounded-full bg-danger px-2 text-xs font-bold text-white shadow-md" aria-live="polite">
              {totalItems}
            </span>
          </Link>
          <button
            aria-label="Ouvrir le menu"
            className="rounded-full bg-white/80 p-3 shadow-md hover:bg-white md:hidden transition-all duration-200"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-neutral-200/70 bg-white/98 md:hidden transition-all duration-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="rounded-xl px-4 py-3 text-lg font-semibold text-primary hover:bg-neutral-100 transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
