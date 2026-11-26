
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  FolderKanban,
  Settings,
  Plus,
  ListTodo,
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    name: "Upcoming",
    href: "/upcoming",
    icon: CalendarDays,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-(--border) bg-(--surface) px-5 py-6">
      {/* Logo */}
      <Link href="/dashboard" className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
          <ListTodo size={22} />
        </div>

        <span className="text-xl font-bold tracking-tight">
          TaskFlow
        </span>
      </Link>

      {/* Create task */}
      <button className="mb-8 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover">
        <Plus size={18} />
        Create task
      </button>

      {/* Navigation */}
      <div className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-(--muted)">
        Menu
      </div>

      <nav className="flex flex-col gap-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-purple-50 text-primary dark:bg-purple-950/40"
                  : "text-(--muted) hover:bg-zinc-100 hover:text-(--foreground) dark:hover:bg-zinc-800"
              }`}
            >
              <Icon size={19} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto">
        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-(--muted) transition hover:bg-zinc-100 hover:text-(--foreground) dark:hover:bg-zinc-800"
        >
          <Settings size={19} />
          Settings
        </Link>

        <div className="mt-5 border-t border-(--border) pt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700 dark:bg-purple-900 dark:text-purple-200">
              Z
            </div>

            <div>
              <p className="text-sm font-semibold">Zeez</p>
              <p className="text-xs text-(--muted)">
                Personal workspace
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
