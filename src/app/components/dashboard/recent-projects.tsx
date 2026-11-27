
import { FolderKanban } from "lucide-react";

const recentProjects = [
  {
    id: 1,
    name: "TaskFlow",
    description: "Build a personal task management application.",
    completedTasks: 8,
    totalTasks: 12,
    status: "In Progress",
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "Update the project cards.",
    completedTasks: 4,
    totalTasks: 13,
    status: "In Progress",
  },
];

export default function RecentProjects() {
  return (
    <section className="rounded-2xl border border-(--border) bg-(--surface) p-6">
      {/* Section heading */}
      <div className="mb-6">
        <h2 className="text-lg font-bold tracking-tight">
          Recent Projects
        </h2>
        <p className="mt-1 text-sm text-(--muted)">
          Keep an eye on your ongoing projects.
        </p>
      </div>

      {/* Projects or empty state */}
      {recentProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {recentProjects.slice(0, 4).map((project) => {
            const progress = Math.round(
              (project.completedTasks / project.totalTasks) * 100
            );

            return (
              <div
                key={project.id}
                className="rounded-xl border border-(--border) p-4"
              >
                <h3 className="text-sm font-semibold">
                  {project.name}
                </h3>

                <p className="mt-1 text-xs text-(--muted)">
                  {project.description}
                </p>

                {/* Progress */}
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="text-(--muted)">Progress</span>
                    <span className="font-semibold">{progress}%</span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-(--border)">
                    <div
                      className="h-full rounded-full bg-purple-600 transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Project details */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-(--muted)">
                    {project.completedTasks} of {project.totalTasks} tasks
                  </span>

                  <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                    {project.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <FolderKanban size={36} className="text-(--muted)" />

          <h3 className="mt-4 text-sm font-semibold">
            No projects yet
          </h3>

          <p className="mt-2 max-w-sm text-xs text-(--muted)">
            You haven't created any projects yet. Create your first
            project to start organising your tasks.
          </p>
        </div>
      )}
    </section>
  );
}
