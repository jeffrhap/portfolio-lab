import { experimentMap } from "@portfolio-labs/shared-types";
import Welcome from "@/components/experiments/welcome";

export default async function ExperimentPage({ params }: { params: Promise<{ experimentId: string }> }) {
  const { experimentId } = await params;
  const experiment = experimentMap[experimentId];

  if (!experiment) {
    return <div className="text-red-400">Experiment not found</div>;
  }

  // For subdomain experiments, load in iframe (full size, no title)
  if (experiment.subdomain) {
    return (
      <iframe
        src={`https://${experiment.subdomain}.portfolio-labs.com/${experiment.id}`}
        className="w-screen h-screen border-0 -m-8"
        title={experiment.name}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    );
  }

  // For inline React experiments
  if (experiment.componentPath === "experiments/welcome") {
    return <Welcome />;
  }

  return <div>Experiment component not found</div>;
}