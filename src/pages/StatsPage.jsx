import { useState } from "react";
import { BarChart3, CircleDollarSign, ShoppingBag, Star, Users } from "lucide-react";
import stats from "../data/stats.json";
import StatCard from "../components/stats/StatCard";
import PopularDishes from "../components/stats/PopularDishes";
import CategoryChart from "../components/stats/CategoryChart";
import OrdersTimeline from "../components/stats/OrdersTimeline";
import SatisfactionGauge from "../components/stats/SatisfactionGauge";

const StatsPage = () => {
  const [view, setView] = useState("manager");

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold text-primary">{view === "client" ? "Vos statistiques de satisfaction" : "Dashboard Analytique"}</h1>
        <div className="rounded-xl bg-white p-1 shadow-md">
          <button className={`rounded-lg px-3 py-1 text-sm ${view === "client" ? "bg-accent text-primary" : ""}`} onClick={() => setView("client")}>Vue Client</button>
          <button className={`rounded-lg px-3 py-1 text-sm ${view === "manager" ? "bg-accent text-primary" : ""}`} onClick={() => setView("manager")}>Vue Gerant</button>
        </div>
      </div>

      {view === "client" ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <SatisfactionGauge value={stats.overview.satisfactionRate} />
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-4 shadow-md">
              <h3 className="mb-2 text-lg font-bold text-primary">Top 3 plats commandes</h3>
              <div className="space-y-2">{stats.topDishes.slice(0, 3).map((dish) => <p key={dish.name} className="text-sm">{dish.name} - {dish.orders} commandes</p>)}</div>
            </div>
            <CategoryChart data={stats.categoryBreakdown} />
          </div>
        </div>
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Total Commandes" value={stats.overview.totalOrders} icon={ShoppingBag} />
            <StatCard title="Revenu Total" value={`${stats.overview.totalRevenue} DH`} icon={CircleDollarSign} />
            <StatCard title="Note Moyenne" value={stats.customerStats.avgRating} icon={Star} />
            <StatCard title="Clients Fideles" value={stats.customerStats.returningCustomers} icon={Users} />
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            <PopularDishes data={stats.topDishes} />
            <OrdersTimeline data={stats.ordersTimeline} />
            <CategoryChart data={stats.categoryBreakdown} />
            <div className="rounded-2xl bg-white p-4 shadow-md">
              <h3 className="mb-4 text-lg font-bold text-primary">Heures de pointe</h3>
              <div className="space-y-2">
                {stats.peakHours.map((row) => (
                  <div key={row.hour} className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2">
                    <span>{row.hour}</span>
                    <span className="font-semibold">{row.orders} commandes</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-md">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary"><BarChart3 size={18} /> 10 dernieres commandes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-neutral-500"><th className="py-2">ID</th><th>Client</th><th>Montant</th><th>Statut</th><th>Heure</th></tr>
                </thead>
                <tbody>
                  {stats.latestOrders.map((order) => (
                    <tr key={order.id} className="border-b border-neutral-100">
                      <td className="py-2 font-semibold">{order.id}</td>
                      <td>{order.client}</td>
                      <td>{order.amount} DH</td>
                      <td>{order.status}</td>
                      <td>{order.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default StatsPage;
