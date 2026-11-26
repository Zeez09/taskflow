import {
  AlarmClockCheck,
  NotepadText,
  SquareCheck,
  Sunrise,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Good to see you!</h1>

        <p className="mt-2 text-sm text-(--muted)">
          Here’s what’s happening with your tasks today.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total Tasks */}
        <div className="flex flex-col gap-2 rounded-2xl border border-(--border) bg-(--surface) p-6">
          <div className="flex items-center gap-2">
            <NotepadText className="text-primary" size={20} />
            <h2 className="text-sm font-bold tracking-tight">Total Tasks</h2>
          </div>
          <p className="mt-2 text-3xl font-bold">42</p>
          <p className="text-sm text-(--muted)">Across all your projects.</p>
        </div>

        {/* Completed Tasks */}
        <div className="flex flex-col gap-2 rounded-2xl border border-(--border) bg-(--surface) p-6">
          <div className="flex items-center gap-2">
            <SquareCheck className="text-green-600" size={20} />
            <h2 className="text-sm font-bold tracking-tight">
              Completed Tasks
            </h2>
          </div>
          <p className="mt-2 text-3xl font-bold">18</p>
          <p className="text-sm text-(--muted)">
            Tasks you've successfully completed.
          </p>
        </div>

        {/* Overdue Tasks */}
        <div className="flex flex-col gap-2 rounded-2xl border border-(--border) bg-(--surface) p-6">
          <div className="flex items-center gap-2">
            <AlarmClockCheck className="text-red-500" size={20} />
            <h2 className="text-sm font-bold tracking-tight">Overdue Tasks</h2>
          </div>
          <p className="mt-2 text-3xl font-bold">4</p>
          <p className="text-sm text-(--muted)">Tasks past their deadlines.</p>
        </div>

        {/* Upcoming Tasks */}
        <div className="flex flex-col gap-2 rounded-2xl border border-(--border) bg-(--surface) p-6">
          <div className="flex items-center gap-2">
            <Sunrise className="text-yellow-500" size={20} />
            <h2 className="text-sm font-bold tracking-tight">Upcoming Tasks</h2>
          </div>
          <p className="mt-2 text-3xl font-bold">3</p>
          <p className="text-sm text-(--muted)">
            Tasks that need your attention soon.
          </p>
        </div>
      </div>
    </div>
  );
}
