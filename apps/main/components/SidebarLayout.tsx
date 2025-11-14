import { Sidebar } from "./Sidebar";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="flex h-screen">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="max-w-4xl">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
