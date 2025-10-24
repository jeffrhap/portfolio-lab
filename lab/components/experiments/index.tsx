
export interface Experiment {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  componentPath: string;
}

export const experiments: Experiment[] = [
  {
    id: "welcome",
    name: "Welcome",
    description: "Start here",
    category: "Introduction",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    componentPath: "experiments/welcome",
  }
];

export const experimentMap = Object.fromEntries(
  experiments.map((exp) => [exp.id, exp])
);
