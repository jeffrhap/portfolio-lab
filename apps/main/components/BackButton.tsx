"use client";

import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="md:hidden fixed top-[60px] left-4 z-50 bg-black/80 hover:bg-black p-2 rounded-lg transition-colors text-green-400 hover:text-green-300"
      aria-label="Go back"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
}

