
"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const productivityData = [
  { day: "Mon", completed: 4 },
  { day: "Tue", completed: 7 },
  { day: "Wed", completed: 5 },
  { day: "Thu", completed: 9 },
  { day: "Fri", completed: 6 },
  { day: "Sat", completed: 8 },
  { day: "Sun", completed: 3 },
];

export default function ProductivityChart() {
  return (
    <div className="h-70 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={productivityData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="productivityGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9333EA" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#9333EA" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="var(--border)"
          />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted)", fontSize: 12 }}
            dy={10}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted)", fontSize: 12 }}
            allowDecimals={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              color: "var(--foreground)",
            }}
          />

          <Area
            type="monotone"
            dataKey="completed"
            stroke="#9333EA"
            strokeWidth={2.5}
            fill="url(#productivityGradient)"
            activeDot={{ r: 5, fill: "#9333EA" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
