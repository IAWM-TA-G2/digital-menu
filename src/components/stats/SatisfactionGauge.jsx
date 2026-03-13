import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const SatisfactionGauge = ({ value }) => {
  const data = [
    { name: "satisfaction", value },
    { name: "remaining", value: 100 - value }
  ];

  return (
    <div className="rounded-2xl bg-white p-4 text-center shadow-md">
      <h3 className="mb-3 text-lg font-bold text-primary">Taux de satisfaction</h3>
      <div className="relative mx-auto h-56 w-full max-w-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={65} outerRadius={90} startAngle={180} endAngle={0}>
              <Cell fill="#27AE60" />
              <Cell fill="#e2e8f0" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center pt-10 text-3xl font-bold text-primary">
          {value}%
        </div>
      </div>
    </div>
  );
};

export default SatisfactionGauge;
