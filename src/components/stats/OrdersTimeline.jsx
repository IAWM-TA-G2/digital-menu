import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const OrdersTimeline = ({ data }) => (
  <div className="rounded-2xl bg-white p-4 shadow-md">
    <h3 className="mb-4 text-lg font-bold text-primary">Evolution commandes 7 jours</h3>
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1E3A5F" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#1E3A5F" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="orders" stroke="#1E3A5F" fill="url(#ordersGradient)" />
          <Line type="monotone" dataKey="orders" stroke="#E8A020" strokeWidth={2} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default OrdersTimeline;
