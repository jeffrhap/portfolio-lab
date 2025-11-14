import fs from "fs";
import path from "path";

interface ExperimentConfig {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  framework: string;
  buildCommand?: string;
  outputDirectory?: string;
  port?: number;
}

function generateRegistry() {
  const appsDir = path.join(process.cwd(), "apps");
  const experiments: ExperimentConfig[] = [];

  // Skip main app
  const folders = fs.readdirSync(appsDir).filter((f) => f !== "main");

  for (const folder of folders) {
    const experimentPath = path.join(appsDir, folder);
    const configPath = path.join(experimentPath, "experiment.json");

    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
      experiments.push(config);
    }
  }

  // Write to packages/shared-types/src/experiments-registry.ts
  const output = `
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

    export const experiments: Experiment[] = ${JSON.stringify(experiments, null, 2)};

    export const experimentMap = Object.fromEntries(
      experiments.map((exp) => [exp.id, exp])
    );
`;

  fs.writeFileSync(path.join(process.cwd(), "packages/shared-types/src/experiments-registry.ts"), output);

  console.log(`✅ Generated registry with ${experiments.length} experiments`);
}

generateRegistry();
