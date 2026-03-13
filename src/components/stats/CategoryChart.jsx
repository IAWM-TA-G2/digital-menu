import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const colors = ["#1E3A5F", "#2E5A8F", "#E8A020", "#C0392B", "#27AE60"];

const CategoryChart = ({ data }) => (
  <div className="rounded-2xl bg-white p-4 shadow-md">
    <h3 className="mb-4 text-lg font-bold text-primary">Repartition par categorie</h3>
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="percentage" nameKey="category" innerRadius={60} outerRadius={100}>
            {data.map((entry, index) => (
              <Cell key={entry.category} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default CategoryChart;
