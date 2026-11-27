"use client";

import { useState } from "react";

import TaskPerformance from "./task-performance";
import ProductivityMap from "./productivity-map";

export default function TaskAnalytics() {
  const [dateRange, setDateRange] = useState("7 days");

  const filters = ["7 days", "30 days", "90 days"];

  return (
    <section className="rounded-2xl bg-(--surface) p-6">
      {/* Section heading and filters */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-bold tracking-tight">
            Task Performance & Productivity
          </h2>

          <p className="mt-1 text-sm text-(--muted)">
            Track your task completion and daily productivity.
          </p>
        </div>

        {/* Date filters */}
        <div className="flex w-fit items-center rounded-xl border border-(--border) bg-(--background) p-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setDateRange(filter)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                dateRange === filter
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-(--muted) hover:text-(--foreground)"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Task Performance */}
        <div className="rounded-xl border border-(--border) p-5">
          <h3 className="text-sm font-semibold">Task Performance</h3>
          <p className="mt-1 text-xs text-(--muted)">
            Overview of your task completion status.
          </p>

          <TaskPerformance />
        </div>

        {/* Productivity Map */}
        <div className="rounded-xl border border-(--border) p-5">
          <h3 className="text-sm font-semibold">Productivity Map</h3>
          <p className="mt-1 text-xs text-(--muted)">
            Your daily task completion activity.
          </p>

          <ProductivityMap />
        </div>
      </div>
    </section>
  );
}
