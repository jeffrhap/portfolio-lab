"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";
import { experiments } from "@portfolio-labs/shared-types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const [filter, setFilter] = useState("All");
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();

  const categories = ["All", ...Array.from(new Set(experiments.map((e) => e.category)))];
  const filteredExperiments = filter === "All" ? experiments : experiments.filter((e) => e.category === filter);

  return (
    <aside className="w-64 bg-black overflow-y-auto flex flex-col border-r border-gray-900">
      <div className="p-4">
        <Link href="/">
          <h1 className="text-lg font-bold flex items-center cursor-pointer ">
            <Terminal className="w-5 h-5 text-green-400" />
            <span className="text-white hover:text-green-400 transition-colors">jeffrey</span>
          </h1>
        </Link>
        <p className="text-xs text-gray-600 mt-1 font-mono">lab / experiments</p>
      </div>

      <nav className="flex-1 px-3 py-2 flex flex-col gap-0 overflow-y-auto scrollbar-styled">
        <div className="flex flex-wrap gap-2 px-2 py-3 pb-2 border-b border-gray-900">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-1.5 py-0.5 rounded text-xs transition-colors whitespace-nowrap ${
                filter === category ? "bg-green-500/20 text-green-400" : "bg-gray-900/50 text-gray-400 hover:text-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 p-3">
          {filteredExperiments.map((exp) => (
            <Link
              key={exp.id}
              href={`/${exp.id}`}
              className={`flex flex-col gap-2 rounded overflow-hidden transition-all ${
                currentId === exp.id ? "ring-1 ring-green-400/60" : "hover:ring-2 hover:ring-green-400/50"
              }`}
            >
              {exp.image && <Image src={exp.image} alt={exp.name} width={100} height={50} className="w-full h-24 object-cover" />}
              <div className="px-2 pb-2">
                <h3 className="text-xs font-semibold text-white text-left line-clamp-1">{exp.name}</h3>
                <p className="text-xs text-gray-400 text-left line-clamp-1">{exp.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
