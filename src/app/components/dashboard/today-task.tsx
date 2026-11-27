const tasks = [
  {
    id: 1,
    title: "Complete dashboard design",
    description: "Finish the TaskFlow dashboard UI.",
    priority: "High",
    status: "In Progress",
    dueTime: "10:00 AM",
  },
  {
    id: 2,
    title: "Review project documentation",
    description: "Go through the project requirements.",
    priority: "Medium",
    status: "To Do",
    dueTime: "12:30 PM",
  },
  {
    id: 3,
    title: "Fix responsive navigation",
    description: "Make the sidebar work on mobile.",
    priority: "Low",
    status: "Completed",
    dueTime: "2:00 PM",
  },
];

export default function TodayTasks() {
  return (
    <section className="rounded-2xl border border-(--border) bg-(--surface) p-6">
      {/* Section heading */}
      <div className="mb-6">
        <h2 className="text-lg font-bold tracking-tight">Today's Tasks</h2>

        <p className="mt-1 text-sm text-(--muted)">
          Keep track of what you need to get done today.
        </p>
      </div>

      {/* Task list */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-xl border border-(--border) p-4"
          >
            {/* Left section */}
            <div className="flex items-center gap-3">
              <input type="checkbox" />

              <div>
                <h3 className="text-sm font-semibold">{task.title}</h3>

                <p className="mt-1 text-xs text-(--muted)">
                  {task.description}
                </p>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  task.priority === "High"
                    ? "bg-red-100 text-red-700"
                    : task.priority === "Medium"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {task.priority}
              </span>
              <span>{task.dueTime}</span>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  task.status === "In Progress"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                    : task.status === "Completed"
                    ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                    : "bg-gray-100 text-gray-700 dark:bg-zinc-800 dark:text-zinc-300"
                }`}
              >
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
