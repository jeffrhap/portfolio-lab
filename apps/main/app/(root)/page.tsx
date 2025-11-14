import { AlertCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="p-4 md:p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex gap-3 md:gap-4">
        <AlertCircle className="w-5 md:w-6 h-5 md:h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
        <div>
          <h2 className="text-base md:text-lg font-semibold text-yellow-500 mb-2">Experimental Zone</h2>
          <p className="text-sm md:text-base text-gray-300">
            Welcome to the lab! These are experimental prototypes and ideas. They may be incomplete, untested, or just for fun. Feel free to
            explore and try things out. Please note: these experiments may or may not work on your device.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">What would you like to explore?</h1>
        <p className="text-sm md:text-base text-gray-400">
          Select an experiment from the menu to get started. Each one is a unique idea or prototype waiting to be discovered.
        </p>
      </div>
    </div>
  );
}
