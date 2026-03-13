import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RecommendationAssistant from "../recommendation/RecommendationAssistant";

const Layout = () => (
  <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
    <Header />
    <main className="mx-auto w-full max-w-7xl px-4 py-10 md:px-12 transition-all duration-300">
      <Outlet />
    </main>
    <Footer />
    <RecommendationAssistant />
  </div>
);

export default Layout;
