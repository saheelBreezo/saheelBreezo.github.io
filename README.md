# Personal Portfolio

Personal website and portfolio of **Saheel Ahmed**, a Geospatial Data Scientist and Engineer working at the intersection of Earth observation, geospatial engineering, and machine learning.

🌐 **Website:** [saheelBreezo.github.io](https://saheelBreezo.github.io)

## About

This website serves as a space to share my professional background, research projects, technical work, writing, and talks.

My work focuses on applying satellite Earth observation, machine learning, and geospatial technologies to environmental monitoring and real-world challenges.

## Built With

- [Astro](https://astro.build/) — Static site framework
- [MDX](https://mdxjs.com/) — Markdown and components for writing
- [TypeScript](https://www.typescriptlang.org/) — Structured project data
- CSS — Custom responsive styling
- [Fontsource](https://fontsource.org/) — Self-hosted Crimson Pro and Inter fonts
- [GitHub Pages](https://pages.github.com/) — Website hosting
- GitHub Actions — Automated build and deployment

## Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── ProjectCard.astro
│   │   └── TalkEntry.astro
│   ├── content/
│   │   └── writing/
│   ├── data/
│   │   ├── projects.ts
│   │   └── talks.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects/
│   │   ├── writing/
│   │   └── talks.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/saheelBreezo/saheelBreezo.github.io.git
cd saheelBreezo.github.io
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:4321` in your browser.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Generate the production website in `dist/` |
| `npm run preview` | Preview the production build locally |

## Deployment

The website is hosted on **GitHub Pages** and deployed automatically using **GitHub Actions**.

Every push to the `main` branch triggers a workflow that:

1. Checks out the repository.
2. Installs dependencies and builds the Astro website.
3. Deploys the generated static files to GitHub Pages.

The deployment configuration is available in `.github/workflows/deploy.yml`.

## Acknowledgments

My original personal website was built using [Gatsby Starter Minimal Blog](https://github.com/LekoArts/gatsby-starter-minimal-blog), created by **Lennart Jörgens (LekoArts)**. The starter provided a foundation for my earlier website and introduced me to a minimalist approach to presenting writing and projects. This website has since been rebuilt using Astro, with a new structure, components, and styling tailored to my portfolio. Thanks to **LekoArts** for making the original Gatsby starter publicly available, and to the **Astro community** for developing the framework used in the current version.

## Contact

- **Website:** [saheelBreezo.github.io](https://saheelBreezo.github.io)
- **GitHub:** [@saheelBreezo](https://github.com/saheelBreezo)
- **LinkedIn:** [Saheel Ahmed](https://www.linkedin.com/in/saheelahmed/)
- **Email:** [saheelahmed2@gmail.com](mailto:saheelahmed2@gmail.com)

---

Built with Astro.