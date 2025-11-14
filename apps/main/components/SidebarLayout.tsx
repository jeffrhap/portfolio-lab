"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Desktop: Side-by-side layout */}
      <div className="hidden md:flex h-screen">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="max-w-4xl">{children}</div>
          </div>
        </main>
      </div>

      {/* Mobile: Sidebar as overlay/fullscreen */}
      <div className="md:hidden flex flex-col h-screen">
        {isSidebarOpen ? (
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        ) : (
          <>
            {/* Mobile Header */}
            <div className="sticky top-0 bg-black border-b border-gray-900 px-4 py-3 flex items-center justify-between z-40">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-sm font-mono">menu</span>
              </button>
              <span className="text-xs text-gray-600 font-mono">lab / experiments</span>
            </div>

            {/* Mobile Main Content */}
            <main className="flex-1 overflow-y-auto">
              <div className="p-4">
                <div>{children}</div>
              </div>
            </main>
          </>
        )}
      </div>
    </div>
  );
}
