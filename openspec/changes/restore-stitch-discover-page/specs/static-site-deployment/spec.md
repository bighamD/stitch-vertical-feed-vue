## ADDED Requirements

### Requirement: Build static Vue application
The project SHALL build into static assets using Vite and Tailwind CSS suitable for local preview, Vercel deployment, and GitHub Pages deployment.

#### Scenario: Production build succeeds
- **WHEN** the build command runs
- **THEN** Vite emits a `dist` directory without TypeScript or bundling errors

### Requirement: Publish to GitHub repository and GitHub Pages
The project SHALL be initialized as a Git repository, pushed to GitHub, and configured for GitHub Pages deployment through GitHub Actions.

#### Scenario: GitHub Pages workflow exists
- **WHEN** the repository is pushed to GitHub
- **THEN** GitHub Actions can build the Vue app and publish `dist` to GitHub Pages

### Requirement: Publish preview to Vercel
The project SHALL be deployable to Vercel and return a Vercel access URL.

#### Scenario: Vercel deployment returns URL
- **WHEN** the Vercel deployment command or fallback deployment script completes
- **THEN** the user receives a Vercel URL for the restored frontend
