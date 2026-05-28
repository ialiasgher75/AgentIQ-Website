# AgentIQ — Learn AI. Build Agents. Shape the Future.

![Next.js](https://img.shields.io/badge/Next.js-14%2F15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Description

AgentIQ is a cutting-edge educational platform dedicated to empowering the next generation of AI and Agentic AI engineers. Through a structured, modern, and project-based approach, students can journey from the fundamentals of Artificial Intelligence to the complex world of multi-agent orchestration and autonomous systems.

The project was developed using **AI-assisted engineering** methodologies, leveraging the **Gemini CLI** and **Spec-Kit Plus** (Speckit Plus) framework. This ensured high-quality, spec-driven development where every feature is rooted in a well-defined constitution and architectural plan.

## Live Demo

🚀 [View Live Demo](https://agentiq.vercel.app)

## Features

- ✅ **6 Fully Responsive Pages:** Home, Courses, Roadmap, About, Contact, and Course Details.
- ✅ **Dynamic Course Catalog:** Real-time search and category filtering for a seamless browsing experience.
- ✅ **Deep-Dive Course Details:** Comprehensive module-by-module curriculum and skill mapping for each course.
- ✅ **AI Engineer Roadmap:** A visual 4-stage guide to mastering AI engineering.
- ✅ **Interactive AI Chatbot:** Floating widget (AgentBot) to assist users with common queries.
- ✅ **Modern Aesthetic:** A bold, dark design system with vibrant gradients and smooth transitions.
- ✅ **Zero-Backend Architecture:** Powered by a centralized static data store for maximum performance and portability.

## Tech Stack

| Frontend | Backend | Tools |
| :--- | :--- | :--- |
| Next.js 14/15 (App Router) | Static (lib/data.ts) | Gemini CLI |
| TypeScript | | Spec-Kit Plus |
| Tailwind CSS v4 | | Lucide React |

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/agentiq.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd agentiq
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
AgentIQ/
├── .spec/                  # Project Specifications & Development Plan
│   ├── tasks/              # Granular, testable task files (001-010)
│   ├── constitution.md     # Mission, design guidelines, and tech standards
│   └── plan.md             # Multi-phase development roadmap
├── app/                    # Next.js App Router (Pages & Layouts)
│   ├── about/              # About page
│   ├── contact/            # Contact page with form and FAQ
│   ├── courses/            # Course listing & Dynamic detail pages ([slug])
│   ├── roadmap/            # AI Learning Roadmap
│   ├── globals.css         # Tailwind v4 theme & global styles
│   ├── layout.tsx          # Root layout with Navbar/Footer/ChatWidget
│   └── page.tsx            # Homepage
├── components/             # Reusable UI Components
│   ├── CategoryFilter.tsx
│   ├── ChatWidget.tsx
│   ├── CourseCard.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── RoadmapStep.tsx
├── history/                # Development History & PHRs
│   └── prompts/            # Traceable Prompt History Records
├── lib/                    # Shared Utilities & Data
│   ├── data.ts             # Centralized static data store
│   └── utils.ts            # Core utility functions (cn, formatting)
├── public/                 # Static assets (images, icons)
└── .specify/               # Speckit Plus templates and scripts
```

## Spec-Kit Plus (Speckit Plus)

This project strictly follows the **Spec-Driven Development (SDD)** pattern. The `.spec` folder is the heart of the development process:
- **`constitution.md`**: Defines the "laws" of the project—mission, design guidelines, and technical constraints.
- **`plan.md`**: A living document outlining the project phases and milestones.
- **`tasks/`**: 10 detailed task files with specific acceptance criteria, used to guide the AI agent through the implementation.

## Environment Variables

No external API keys or environment variables are required for this demo version, as it uses a centralized static data store.

## Deployment

Deploying AgentIQ on Vercel is straightforward:

1. Push your code to a GitHub repository.
2. Connect the repository to your [Vercel](https://vercel.com) dashboard.
3. Vercel will automatically detect the Next.js project and deploy it.
4. Enjoy your live AI learning platform!

## Team Members

- **Member 1** - [GitHub Profile](https://github.com/placeholder1)
- **Member 2** - [GitHub Profile](https://github.com/placeholder2)

## Screenshots

*Add screenshots here*

---
Built with ❤️ by the AgentIQ Team using **Gemini CLI** and **Spec-Kit Plus**.
