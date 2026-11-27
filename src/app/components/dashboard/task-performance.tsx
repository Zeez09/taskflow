import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const taskData = [
  { name: "Completed", value: 24, color: "#16A34A" },
  { name: "In Progress", value: 10, color: "#9333EA" },
  { name: "To Do", value: 6, color: "#D97706" },
  { name: "Overdue", value: 4, color: "#EF4444" },
];

export default function TaskPerformance() {
  const totalTasks = taskData.reduce((total, task) => total + task.value, 0);

  const completedTasks =
    taskData.find((task) => task.name === "Completed")?.value ?? 0;

  const completionRate = Math.round((completedTasks / totalTasks) * 100);
  return (
    <div className="w-full">
      <div className="h-65 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={taskData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={3}
              stroke="none"
            >
              {taskData.map((task) => (
                <Cell key={task.name} fill={task.color} />
              ))}
            </Pie>
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-current"
            >
              {totalTasks}
            </text>

            <text
              x="50%"
              y="57%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--foreground)"
              fontSize={12}
            >
              Total Tasks
            </text>
            <text
              x="50%"
              y="68%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-current"
              fontSize={11}
              fill="#16A34A"
            >
              {completionRate}% completed
            </text>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {taskData.map((task) => (
          <div key={task.name} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: task.color }}
            />

            <span className="text-xs text-(--muted)">{task.name}</span>

            <span className=" text-xs font-semibold">{task.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
