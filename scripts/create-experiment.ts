import fs from 'fs';
import path from 'path';

const experimentName = process.argv[2];

if (!experimentName) {
  console.error('Usage: npm run create:experiment <experiment-name>');
  process.exit(1);
}

const experimentDir = path.join(process.cwd(), 'apps', `experiment-${experimentName}`);

// Create directory structure
fs.mkdirSync(path.join(experimentDir, 'src'), { recursive: true });

// Create experiment.json
const experimentConfig = {
  id: experimentName,
  name: experimentName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
  description: `${experimentName} experiment`,
  category: 'Experiments',
  framework: 'vanilla', // default
  buildCommand: 'npm run build',
  outputDirectory: 'dist',
  port: 3001 + Math.random() * 100,
  subdomain: `${experimentName}.jeffreyhappel.nl`,
};

fs.writeFileSync(
  path.join(experimentDir, 'experiment.json'),
  JSON.stringify(experimentConfig, null, 2)
);

// Create package.json template
const packageJson = {
  name: `@portfolio-labs/lab-${experimentName}`,
  version: '0.1.0',
  private: true,
  scripts: {
    dev: 'vite',
    build: 'vite build',
    preview: 'vite preview',
  },
  devDependencies: {
    vite: '^5.0.0',
    typescript: '^5.3.0',
  },
};

fs.writeFileSync(
  path.join(experimentDir, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);

// Create vite.config.ts
const viteConfig = `import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  server: {
    port: ${Math.floor(experimentConfig.port)},
  },
})`;

fs.writeFileSync(path.join(experimentDir, 'vite.config.ts'), viteConfig);

// Create index.html
const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${experimentConfig.name}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(experimentDir, 'index.html'), indexHtml);

// Create src/main.ts
const mainTs = `console.log('${experimentName} experiment loaded');\n`;

fs.writeFileSync(path.join(experimentDir, 'src', 'main.ts'), mainTs);

console.log(`✅ Created experiment: ${experimentName}`);
console.log(`📁 Location: apps/experiment-${experimentName}`);
console.log(`\nNext steps:`);
console.log(`1. cd apps/experiment-${experimentName}`);
console.log(`2. npm install`);
console.log(`3. npm run dev`);
console.log(`4. Update experiment.json with your details`);
console.log(`5. Run: npm run generate:registry`);