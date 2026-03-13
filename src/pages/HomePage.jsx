import { Link } from "react-router-dom";
import dishes from "../data/dishes.json";
import MenuCategories from "../components/menu/MenuCategories";
import ContextualCategories from "../components/menu/ContextualCategories";
import DishCard from "../components/menu/DishCard";
import Button from "../components/ui/Button";

const HomePage = () => {
  const popular = dishes.filter((dish) => dish.isPopular).slice(0, 4);

  return (
    <div className="space-y-16">
      <section className="soft-grid relative overflow-hidden rounded-[2rem] border border-white/60 text-white shadow-2xl transition-all duration-300">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600"
          alt="Restaurant Dar Zitoun"
          className="h-[72vh] w-full object-cover scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 md:px-12">
          <div className="max-w-2xl animate-fade-in">
            <p className="mb-3 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs tracking-wide backdrop-blur shadow-lg">
              EXPERIENCE MENU DIGITAL
            </p>
            <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl drop-shadow-lg">Bienvenue chez Dar Zitoun</h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">Scannez, choisissez, savourez. Une experience culinaire rapide, elegante et fluide.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/menu"><Button className="text-lg px-6 py-3">Voir le menu</Button></Link>
              <Link to="/reservation"><Button variant="ghost" className="border-white/50 text-white hover:bg-white/10 text-lg px-6 py-3">Reserver</Button></Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center text-xs md:text-sm">
              <div className="glass-panel rounded-xl p-4 shadow-md"><p className="text-2xl font-bold">4.6/5</p><p>Note client</p></div>
              <div className="glass-panel rounded-xl p-4 shadow-md"><p className="text-2xl font-bold">30+</p><p>Plats signatures</p></div>
              <div className="glass-panel rounded-xl p-4 shadow-md"><p className="text-2xl font-bold">12min</p><p>Commande moyenne</p></div>
            </div>
          </div>
        </div>
      </section>

      <MenuCategories />
      <ContextualCategories />

      <section className="rounded-3xl bg-white/90 p-8 shadow-xl transition-all duration-300">
        <h2 className="mb-6 text-3xl font-bold text-primary">Plats populaires</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {popular.map((dish) => (
            <DishCard key={dish.id} dish={dish} variant="featured" />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/60 bg-white/95 p-8 shadow-xl backdrop-blur transition-all duration-300">
        <h2 className="text-3xl font-bold text-primary mb-6">Infos restaurant</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <p className="text-lg"><strong>Horaires:</strong> 12h00 - 23h30</p>
          <p className="text-lg"><strong>Adresse:</strong> 27 Rue Ibnou Al Arif, Casablanca</p>
          <p className="text-lg"><strong>Google:</strong> 4.6/5 (342 avis)</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
