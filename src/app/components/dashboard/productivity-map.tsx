
"use client";

const productivityData = Array.from({ length: 91 }, (_, index) => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() - (90 - index));

  return {
    date,
    tasks: Math.floor(Math.random() * 8),
  };
});

function getActivityColor(tasks: number) {
  if (tasks === 0) return "bg-zinc-100 dark:bg-zinc-800";
  if (tasks <= 2) return "bg-purple-200 dark:bg-purple-950";
  if (tasks <= 4) return "bg-purple-400 dark:bg-purple-800";
  if (tasks <= 6) return "bg-purple-600 dark:bg-purple-600";
  return "bg-purple-800 dark:bg-purple-400";
}

export default function ProductivityMap() {
  const startDay = productivityData[0].date.getDay();

  const paddedData = [
    ...Array.from({ length: startDay }, () => null),
    ...productivityData,
  ];

  const weeks = [];

  for (let i = 0; i < paddedData.length; i += 7) {
    weeks.push(paddedData.slice(i, i + 7));
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex gap-3">
          {/* Weekday labels */}
          <div className="grid shrink-0 grid-rows-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, index) => (
                <span
                  key={day}
                  className={`flex h-4.5 items-center text-[10px] text-(--muted) ${
                    index % 2 === 0 ? "invisible" : ""
                  }`}
                >
                  {day}
                </span>
              )
            )}
          </div>

          {/* Contribution grid */}
          <div className="grid flex-1 grid-flow-col grid-rows-7 gap-2">
            {weeks.flatMap((week, weekIndex) =>
              week.map((item, dayIndex) => {
                if (!item) {
                  return (
                    <div
                      key={`empty-${weekIndex}-${dayIndex}`}
                      className="aspect-square min-w-0"
                    />
                  );
                }

                return (
                  <div
                    key={item.date.toISOString()}
                    title={`${item.tasks} tasks completed on ${item.date.toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}`}
                    className={`aspect-square min-w-0 rounded-sm ${getActivityColor(
                      item.tasks
                    )} transition-opacity hover:opacity-70`}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-5 flex items-center justify-end gap-2">
        <span className="text-xs text-(--muted)">Less</span>

        {[0, 2, 4, 6, 7].map((level) => (
          <div
            key={level}
            className={`h-3 w-3 rounded-sm ${getActivityColor(level)}`}
          />
        ))}

        <span className="text-xs text-(--muted)">More</span>
      </div>
    </div>
  );
}
