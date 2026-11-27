const deadlines = [
  {
    id: 1,
    title: "Complete API integration",
    project: "TaskFlow",
    priority: "High",
    day: "27",
    month: "NOV",
  },
  {
    id: 2,
    title: "Review project documentation",
    project: "TaskFlow",
    priority: "Medium",
    day: "29",
    month: "NOV",
  },
  {
    id: 3,
    title: "Update portfolio",
    project: "Personal",
    priority: "Low",
    day: "02",
    month: "DEC",
  },
];

export default function UpcomingDeadlines() {
  return (
    <section className="rounded-2xl border border-(--border) bg-(--surface) p-6">
      <div className="mb-6">
        <h2 className="text-lg font-bold tracking-tight">Upcoming Deadlines</h2>

        <p className="mt-1 text-sm text-(--muted)">
          Don't miss your upcoming tasks.
        </p>
      </div>

      <div className="space-y-4">
        {deadlines.map((deadline) => (
          <div
            key={deadline.id}
            className="border-b border-(--border) pb-4 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              {/* Date box */}
              <div className="flex flex-col items-center justify-center rounded-xl border border-(--border) px-3 py-2">
                <span className="text-lg font-bold">{deadline.day}</span>
                <span className="text-xs text-(--muted)">{deadline.month}</span>
              </div>

              {/* Deadline information */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold">
                  {deadline.title}
                </h3>

                <p className="mt-1 text-xs text-(--muted)">
                  {deadline.project}
                  <span
                    className={`ml-2 rounded-full px-2 py-1 text-xs font-medium ${
                      deadline.priority === "High"
                        ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                        : deadline.priority === "Medium"
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                        : "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                    }`}
                  >
                    {deadline.priority}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
