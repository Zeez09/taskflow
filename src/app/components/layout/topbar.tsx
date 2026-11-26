"use client";

import { Search, Bell, CircleUser } from "lucide-react";
import ThemeToggle from "./theme-toggle";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-8 py-5">
      {/* Left section: Search */}

      <div className="flex w-72 items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-3 py-2.5 focus-within:ring-2 focus-within:ring-purple-500">
        <Search size={18} className="text-(--muted)" />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      {/* Right section: Notifications, theme toggle and avatar */}
      <div className="flex items-center gap-4">
        <button className="hover:cursor-pointer">
          <Bell />
        </button>

        <ThemeToggle />

        <button className="hover:cursor-pointer">
          <CircleUser />
        </button>
      </div>
    </header>
  );
}
