# Architecture
- The project is a monorepo using nx.dev
- The project is using component architecture
    - With component architecture we are creating smart and presentational components
    - We can easily build components first with storybook
    - Custom hooks can be tested independently
    - We can use storybook to build views before composing them into pages and app
- Application is built using modular monolith architecture, each module is a nx library
- Modules outside shared ones (eg. core) can be developed independently without any conflicts
- Each module can use its own state management (eg. redux, mobx) if needed
- What to add:
  - better configuration for paths used for routing
  - mock server for api calls
  - error handling
  - playwright for e2e and integration tests
  - tests for custom hooks

# Notes
- To build project V0 from Vercel was used to generate forecast view
- To build project GitHub Copilot was used to generate some parts of code
- Tailwind was added as experiment (and was forced a little by V0)
- modules can be further divided into features' collections or views
- rspack could be used instead of vite, but nx was throwing errors during installation

# What you need to start
- Node.js 20.10.0
- pnpm 8.14.1

# How to install
1. Run `pnpm install` in the root directory

# How to run
1. Run `pnpm start` in the root directory

# Other runs
You can use nx console to run other commands like tests and storybooks for libraries