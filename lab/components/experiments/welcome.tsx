export default function Welcome() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-4xl font-bold mb-2">
          Building <span className="text-green-400">interactive</span> experiments.
        </h2>
        <p className="text-gray-400 text-lg">Transforming ideas into clean, user-friendly experiences.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-500/50 transition-all group cursor-default">
          <code className="text-green-400 text-xs">{"<Interactive />"}</code>
          <h3 className="font-semibold text-white mt-2">Try experiments</h3>
          <p className="text-sm text-gray-400 mt-1">Interactive demos and prototypes</p>
        </div>
        <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-green-500/50 transition-all group cursor-default">
          <code className="text-green-400 text-xs">{"{ experience }"}</code>
          <h3 className="font-semibold text-white mt-2">Explore ideas</h3>
          <p className="text-sm text-gray-400 mt-1">Test and build new concepts</p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-900 border border-gray-800 rounded-lg font-mono text-sm">
        <div className="text-green-400">$ npm run experiments</div>
        <div className="text-gray-400 mt-2">{"const success = true;"}</div>
        <div className="text-gray-400">{"const awesome = true;"}</div>
        <div className="mt-2">
          <span className="text-green-400">&gt; </span>
          <span className="text-gray-500 animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
}
