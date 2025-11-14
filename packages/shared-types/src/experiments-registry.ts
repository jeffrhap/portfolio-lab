
    // This file is auto-generated. Do not edit manually.
    // Run: npm run generate:registry

    export interface Experiment {
      id: string;
      name: string;
      description: string;
      category: string;
      image?: string;
      framework: string;
      buildCommand?: string;
      outputDirectory?: string;
      port?: number;
      subdomain?: string;
      componentPath?: string;
    }

    export const experiments: Experiment[] = [
  {
    "id": "threejs-cartoony",
    "name": "Threejs Cartoony",
    "description": "threejs-cartoony experiment",
    "category": "Experiments",
    "framework": "vanilla",
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "port": 3013.7457123595195,
    "subdomain": "threejs-cartoony.jeffreyhappel.nl"
  }
];

    export const experimentMap = Object.fromEntries(
      experiments.map((exp) => [exp.id, exp])
    );
