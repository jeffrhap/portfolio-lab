import { AlertCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex gap-4">
        <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
        <div>
          <h2 className="text-lg font-semibold text-yellow-500 mb-2">Experimental Zone</h2>
          <p className="text-gray-300">
            Welcome to the lab! These are experimental prototypes and ideas. They may be incomplete, untested, or just for fun. Feel free to
            explore and try things out. Please note: these experiments may or may not work on your device.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-white mb-4">What would you like to explore?</h1>
        <p className="text-gray-400">
          Select an experiment from the sidebar to get started. Each one is a unique idea or prototype waiting to be discovered.
        </p>
      </div>
    </div>
  );
}
