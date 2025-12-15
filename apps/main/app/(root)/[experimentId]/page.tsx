import { experimentMap } from "@portfolio-labs/shared-types";
import { BackButton } from "@/components/BackButton";

export default async function ExperimentPage({ params }: { params: Promise<{ experimentId: string }> }) {
  const { experimentId } = await params;
  const experiment = experimentMap[experimentId];

  if (!experiment) {
    return <div className="text-red-400 p-8">Experiment not found: {experimentId}</div>;
  }

  // For subdomain experiments, load in iframe (full size, no title)
  if (experiment.subdomain) {
    const iframeUrl = new URL(`https://${experiment.subdomain}`);
    iframeUrl.searchParams.set("embedded", "true");
    
    return (
      <div className="w-full h-full">
        <BackButton />
        {/* Desktop: Next to sidebar */}
        <div className="hidden md:block fixed right-0 bottom-0 top-0 bg-black" style={{ left: 'var(--sidebar-width, 0)' }}>
          <iframe
            src={iframeUrl.toString()}
            className="w-full h-full border-0"
            title={experiment.name}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
        
        {/* Mobile: Fullscreen */}
        <div className="md:hidden fixed inset-0 bg-black">
          <iframe
            src={iframeUrl.toString()}
            className="w-full h-full border-0"
            title={experiment.name}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
    );
  }
  
  return <div className="p-8 text-red-400">Experiment component not found</div>;
}