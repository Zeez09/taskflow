import Sidebar from "../components/layout/sidebar";
import Topbar from "../components/layout/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-(--background)">
      <Sidebar />

      <main className="min-w-0 flex-1">
        <div className="mx-auto w-full max-w-7xl">
          <Topbar />
          {children}
        </div>
      </main>
    </div>
  );
}