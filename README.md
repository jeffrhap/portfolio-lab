# Portfolio Labs - Dynamic Monorepo

A modern portfolio platform built with a monorepo structure that allows you to create new experiments with **any tech stack** (React, Svelte, Vue, Vanilla, etc.) without modifying the core app.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Creating New Experiments](#creating-new-experiments)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

Portfolio Labs is a monorepo that showcases interactive experiments built with any JavaScript framework. The main application serves as a hub with a sidebar interface that automatically discovers and displays experiments from any folder in the `apps/` directory.

The key innovation: **Create a new folder, add an `experiment.json` file, and your experiment automatically appears in the sidebar.** No need to modify the main app or manually update experiment lists.

## ✨ Key Features

- **🔧 Framework Agnostic**: Use React, Svelte, Vue, Vanilla JS, or any Vite-compatible framework
- **📂 Auto-Discovery**: Create experiments in folders; they're automatically detected and registered
- **🚀 Monorepo Management**: Turborepo handles efficient building and caching
- **🎨 Shared Types & Config**: Common interfaces and styling across all apps
- **⚡ Independent Deployments**: Each experiment can deploy independently to subdomains
- **🔄 Hot Reloading**: Instant feedback during development
- **📱 Responsive Design**: Works on desktop, tablet, and mobile

## 📦 Prerequisites

Before starting, ensure you have:

- **Node.js**: v22.0.0 or higher ([nodejs.org](https://nodejs.org/))
  - Verify: `node --version` and `npm --version`

- **Git**: For version control ([git-scm.com](https://git-scm.com/))
  - Verify: `git --version`

- **Code Editor** (Recommended):
  - Visual Studio Code
  - Cursor (AI-powered IDE)

## 💾 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio-labs.git
cd portfolio-labs
```

### Step 2: Verify Project Structure

```
portfolio-labs/
├── apps/
│   └── main/                    # Main Next.js app
├── packages/
│   └── shared-types/            # Shared TypeScript definitions
├── scripts/
│   ├── create-experiment.ts     # Create new experiments
│   └── generate-experiments-registry.ts  # Auto-generate registry
├── package.json
├── turbo.json
└── tsconfig.json
```

### Step 3: Install Dependencies

From the root directory:

```bash
npm install
```

This installs dependencies for the root, all apps in `apps/`, and all packages in `packages/`.

### Step 4: Build Shared Packages

```bash
npm run build
```

This generates the experiments registry and builds shared packages.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Generate initial experiment registry
npm run build

# 3. Start development server
npm run dev

# 4. Open http://localhost:3000 in your browser
```

That's it! The main app is now running and ready for experiments.

## 🆕 Creating New Experiments

### The Easy Way: Use the Create Script

```bash
npm run create:experiment my-awesome-experiment
```

This automatically creates:

```
apps/experiment-my-awesome-experiment/
├── src/
│   └── main.ts
├── index.html
├── vite.config.ts
├── package.json
├── tsconfig.json
└── experiment.json
```

### What's in `experiment.json`?

```json
{
  "id": "my-awesome-experiment",
  "name": "My Awesome Experiment",
  "description": "This is my awesome experiment",
  "category": "Experiments",
  "image": "https://...",
  "framework": "vanilla",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "port": 3050
}
```

**Update these fields:**
- `name`: Display name in the sidebar
- `description`: Short description
- `category`: Group experiments (e.g., "React", "Svelte", "Interactive", etc.)
- `image`: Thumbnail URL (optional)
- `framework`: What you're using (react, svelte, vue, vanilla, etc.)
- `port`: Unique port for development (auto-generated)

### Step-by-Step: Create Your First Experiment

```bash
# 1. Create the experiment
npm run create:experiment hello-world

# 2. Navigate to it
cd apps/experiment-hello-world

# 3. Install dependencies
npm install

# 4. Start development
npm run dev

# 5. Edit src/main.ts and build your thing!

# 6. When done, regenerate the registry
cd ../..
npm run generate:registry

# 7. Your experiment now appears in the sidebar!
npm run dev  # Restart main app to see changes
```

### Example: Creating a Svelte Experiment

```bash
# 1. Create the experiment
npm run create:experiment svelte-counter

# 2. Install Svelte
cd apps/experiment-svelte-counter
npm install svelte

# 3. Update vite.config.ts to add Svelte plugin
```

Edit `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3050,
  },
})
```

```bash
# 4. Install Svelte plugin
npm install -D @sveltejs/vite-plugin-svelte

# 5. Create src/App.svelte and modify src/main.ts
# 6. Test it: npm run dev
# 7. Register it: npm run generate:registry (from root)
```

## 🛠️ Development

### Start All Apps

```bash
npm run dev
```

Runs all development servers:
- **Main App**: http://localhost:3000
- **All Experiments**: Their respective ports (e.g., 3050+)

### Start Only Main App

```bash
npm run dev -w apps/main
```

### Making Code Changes

Changes are reflected instantly with hot module replacement (HMR):

1. Edit a file
2. Save (`Ctrl+S` or `Cmd+S`)
3. See the changes in your browser

### Updating Experiments After Changes

After modifying an `experiment.json` file:

```bash
npm run generate:registry
npm run dev  # Restart to see changes
```

### Testing Locally with Subdomains

Edit `C:\Windows\System32\drivers\etc\hosts` (Windows) or `/etc/hosts` (macOS/Linux):

```
127.0.0.1  localhost.portfolio-labs.local
127.0.0.1  main.localhost.portfolio-labs.local
```

## 🔨 Building

### Build All Apps

```bash
npm run build
```

Creates optimized production builds:
- `apps/main/.next/` (Next.js)
- `apps/experiment-**/dist/` (Vite)

### Build Single Experiment

```bash
npm run build -w apps/experiment-my-awesome-experiment
```

### Verify Builds

```bash
# Windows PowerShell
Test-Path apps/main/.next
Get-ChildItem apps/experiment-*/dist

# macOS/Linux
ls -la apps/main/.next
ls -la apps/experiment-*/dist
```

## 🚢 Deployment

### Deploy to Vercel

#### Main App

```bash
cd apps/main
vercel
```

Follow prompts, set project name to `portfolio-labs-main`.

#### Experiment Apps

```bash
cd apps/experiment-my-awesome-experiment
vercel
```

Set project name to `portfolio-labs-experiment-my-awesome-experiment`.

### DNS Configuration

In your domain registrar (Namecheap, Route53, Cloudflare, etc.):

```
@ (root)                                CNAME portfolio-labs-main.vercel.app
www                                     CNAME portfolio-labs-main.vercel.app
experiment-my-awesome-experiment       CNAME portfolio-labs-exp-my-awesome.vercel.app
```

### Environment Variables

Each app can have `.env.local` for environment-specific config:

```env
# apps/main/.env.local
NEXT_PUBLIC_EXPERIMENTS_API=https://api.portfolio-labs.com

# apps/experiment-my-awesome-experiment/.env
VITE_API_URL=https://api.portfolio-labs.com
```

## 📁 Project Structure

```
portfolio-labs/
│
├── apps/
│   ├── main/                               # Next.js hub application
│   │   ├── app/
│   │   │   ├── (root)/
│   │   │   │   ├── [experimentId]/page.tsx # Dynamic experiment routes
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx                # Home page
│   │   │   ├── globals.css
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   │   ├── Sidebar.tsx                # Experiment navigation
│   │   │   ├── SidebarLayout.tsx          # Layout wrapper
│   │   │   └── experiments/
│   │   │       ├── welcome.tsx            # Default experiment
│   │   │       └── index.ts               # Exports shared types
│   │   ├── public/
│   │   ├── package.json
│   │   ├── next.config.ts
│   │   ├── tsconfig.json
│   │   └── vercel.json
│   │
│   ├── experiment-example-1/               # Any experiment app (auto-created)
│   │   ├── src/
│   │   │   └── main.ts
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── package.json
│   │   ├── experiment.json                # Metadata (auto-discovered)
│   │   └── tsconfig.json
│   │
│   └── experiment-example-2/               # Another experiment...
│       └── ...
│
├── packages/
│   └── shared-types/                       # Shared TypeScript definitions
│       ├── src/
│       │   ├── index.ts                   # Re-exports registry
│       │   └── experiments-registry.ts    # Auto-generated registry
│       ├── dist/                          # Compiled output
│       ├── package.json
│       ├── tsconfig.json
│       └── README.md
│
├── scripts/
│   ├── create-experiment.ts                # CLI to create experiments
│   └── generate-experiments-registry.ts   # Auto-discover experiments
│
├── node_modules/
├── package.json                            # Root config
├── package-lock.json
├── tsconfig.json                           # Root TypeScript config
├── turbo.json                              # Turborepo configuration
├── .gitignore
└── README.md                               # This file
```

## 🎯 Workflow Examples

### Example 1: Create a Vue Experiment

```bash
# 1. Create it
npm run create:experiment my-vue-app

# 2. Add Vue
cd apps/experiment-my-vue-app
npm install vue @vitejs/plugin-vue

# 3. Update vite.config.ts
```

In `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: { outDir: 'dist' },
  server: { port: 3051 },
})
```

```bash
# 4. Create src/App.vue, update src/main.ts

# 5. Test
npm run dev

# 6. Register it
cd ../..
npm run generate:registry
npm run dev  # Restart main app
```

### Example 2: Create a React Experiment

```bash
# 1. Create it
npm run create:experiment my-react-app

# 2. Add React
cd apps/experiment-my-react-app
npm install react react-dom @vitejs/plugin-react

# 3. Update vite.config.ts
```

In `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist' },
  server: { port: 3052 },
})
```

```bash
# 4. Create src/App.jsx, update src/main.tsx

# 5. Test
npm run dev

# 6. Register
cd ../..
npm run generate:registry
npm run dev
```

### Example 3: Create a 3D Visualization (Three.js)

```bash
npm run create:experiment 3d-visualizer
cd apps/experiment-3d-visualizer
npm install three

# Edit src/main.ts to use Three.js
npm run dev
npm run generate:registry (from root)
```

## 🧪 Testing

### Type Checking

```bash
# Check types for all apps
npx tsc --noEmit

# Check types for specific app
cd apps/main && npx tsc --noEmit
```

### Linting

```bash
# Lint all apps
npm run lint

# Lint specific app
npm run lint -w apps/main
```

### Manual Testing

1. **Main app loads**: Visit http://localhost:3000
2. **Sidebar displays**: Check if experiments appear
3. **Navigation works**: Click experiments in sidebar
4. **Experiment loads**: Verify experiment content displays
5. **Hot reload works**: Edit experiment files and see changes

## 🔧 Troubleshooting

### Issue: Experiments Don't Appear in Sidebar

**Solution:**
```bash
# Make sure you generated the registry
npm run generate:registry

# Restart the dev server
npm run dev
```

### Issue: "Cannot find module '@portfolio-labs/shared-types'"

**Solution:**
```bash
# Build shared packages
npm run build -w packages/shared-types

# Clean and rebuild everything
npm run clean
npm install
npm run build
```

### Issue: Port Already in Use

**Solution:**
```bash
# Kill the process (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change the port in vite.config.ts
```

### Issue: Dependencies Not Installing

**Solution:**
```bash
# Use legacy peer deps if needed
npm install --legacy-peer-deps

# Or update npm
npm install -g npm@latest
npm install
```

### Issue: Build Fails

**Solution:**
```bash
# Clean cache and rebuild
npm run clean
npm install
npm run build -- --verbose
```

## 📚 Useful Commands

```bash
# Development
npm run dev                              # Start all apps
npm run dev -w apps/main                # Start main app only

# Building
npm run build                            # Build all apps
npm run build -w apps/experiment-xyz    # Build single experiment

# Experiments
npm run create:experiment <name>        # Create new experiment
npm run generate:registry               # Auto-discover experiments

# Cleanup
npm run clean                           # Clear turbo cache
```

## 📖 Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [Vite Docs](https://vitejs.dev/)
- [Turborepo Docs](https://turbo.build/docs)
- [Svelte Docs](https://svelte.dev/docs)
- [Vue Docs](https://vuejs.org/guide/)
- [React Docs](https://react.dev/)

## 📄 License

MIT License - feel free to use this for your portfolio!

## 🚀 Next Steps

1. Create your first experiment: `npm run create:experiment my-idea`
2. Build something awesome with your framework of choice
3. Regenerate registry: `npm run generate:registry`
4. Deploy to Vercel: `vercel`
5. Share your portfolio with the world!