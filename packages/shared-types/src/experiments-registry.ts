
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

    export const experiments: Experiment[] = [];

    export const experimentMap = Object.fromEntries(
      experiments.map((exp) => [exp.id, exp])
    );
