import { Instagram, Facebook, MapPin, Clock3 } from "lucide-react";

const Footer = () => (
  <footer className="mt-20 bg-primary py-12 text-white transition-all duration-300">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3 md:px-12">
      <div>
        <h4 className="text-2xl font-bold mb-2">Dar Zitoun</h4>
        <p className="mt-2 text-lg text-white/80">Menu digital et experience client fluide via QR code.</p>
      </div>
      <div className="space-y-3 text-lg">
        <p className="flex items-center gap-3"><Clock3 size={18} /> 12h00 - 23h30</p>
        <p className="flex items-center gap-3"><MapPin size={18} /> 27 Rue Ibnou Al Arif, Casablanca</p>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition-all duration-200"><Instagram size={20} /></a>
        <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition-all duration-200"><Facebook size={20} /></a>
      </div>
    </div>
    <p className="mt-10 text-center text-sm text-white/70">© 2026 Dar Zitoun. Tous droits reserves.</p>
  </footer>
);

export default Footer;
