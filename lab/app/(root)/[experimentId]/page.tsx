import { notFound } from "next/navigation";
import { experimentMap } from "@/components/experiments";
import dynamic from "next/dynamic";

interface Props {
  params: Promise<{ experimentId: string }>;
}

export default async function ExperimentPage({ params }: Props) {
  const { experimentId } = await params;
  const experiment = experimentMap[experimentId];

  if (!experiment) {
    notFound();
  }

  // Dynamically import the experiment component
  const Component = dynamic(
    () => import(`@/components/${experiment.componentPath}`),
    { loading: () => <div className="text-gray-400">Loading experiment...</div> }
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-4xl font-bold text-white">{experiment.name}</h1>
        <p className="text-gray-400 text-lg mt-2">{experiment.description}</p>
      </div>
      <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/50">
        <Component />
      </div>
    </div>
  );
}
