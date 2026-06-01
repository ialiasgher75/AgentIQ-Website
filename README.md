# AgentIQ — Learn AI. Build Agents. Shape the Future.

![Next.js](https://img.shields.io/badge/Next.js-14%2F15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Description

AgentIQ is a cutting-edge educational platform dedicated to empowering the next generation of AI and Agentic AI engineers. Through a structured, modern, and project-based approach, students can journey from the fundamentals of Artificial Intelligence to the complex world of multi-agent orchestration and autonomous systems.

The project was developed using **AI-assisted engineering** methodologies, leveraging the **Gemini CLI** and **Spec-Kit Plus** (Speckit Plus) framework. This ensured high-quality, spec-driven development where every feature is rooted in a well-defined constitution and architectural plan.

## Live Demo

🚀 [View Live Demo](https://agentiq-ai-learning-platform.vercel.app/)

## Features

- ✅ **7 Fully Responsive Pages:** Home, Courses, Dashboard, Roadmap, About, Contact, and Course Details.
- ✅ **User Learning Dashboard:** A personalized hub for students to track enrolled courses, view progress, and access earned certificates.
- ✅ **Smart Course Assistant:** A functional, rule-based chatbot that provides real-time course recommendations and details.
- ✅ **Integrated Payment System:** Secure multi-method checkout supporting Credit/Debit Cards, Mobile Wallets (EasyPaisa/JazzCash), and Bank Transfers.
- ✅ **Interactive Enrollment Flow:** Professional sign-up process with real-time form validation and persistence.
- ✅ **Dynamic Course Catalog:** Real-time search and category filtering with high-quality, topic-specific Unsplash visuals.
- ✅ **AI Engineer Roadmap:** A visual 4-stage guide to mastering AI engineering with detailed topic and tool mapping.
- ✅ **Professional Aesthetic:** A clean, light white and blue design system optimized for readability and professional trust.
- ✅ **Robust Image Handling:** Custom `SafeImage` system with automated fallbacks for resilient visual delivery.

## Tech Stack

| Frontend | Backend/Persistence | Tools |
| :--- | :--- | :--- |
| Next.js 14/15 (App Router) | Static Data (lib/data.ts) | Gemini CLI |
| TypeScript | localStorage (Client Persistence) | Spec-Kit Plus |
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
│   ├── dashboard/          # NEW: Full User Learning Dashboard
│   ├── courses/            # Course listing & Dynamic detail pages ([slug])
│   ├── roadmap/            # AI Learning Roadmap
│   ├── globals.css         # NEW: Professional Light Mode theme
│   ├── layout.tsx          # Root layout with Navbar/Footer/ChatWidget
│   └── page.tsx            # Refactored Homepage
├── components/             # Reusable UI Components
│   ├── EnrollmentModal.tsx # NEW: Multi-step enrollment & payment
│   ├── SafeImage.tsx       # NEW: Resilient image loading component
│   ├── ChatWidget.tsx      # UPDATED: Smart Course Assistant logic
│   ├── CourseCard.tsx      # UPDATED: Dashboard integration & progress
│   └── ...
├── history/                # Development History & PHRs
│   └── prompts/            # Traceable Prompt History Records
├── lib/                    # Shared Utilities & Data
│   ├── data.ts             # Centralized static data store
└── ...
```

## Spec-Kit Plus (Speckit Plus)

This project strictly follows the **Spec-Driven Development (SDD)** pattern. The `.spec` folder is the heart of the development process:
- **`constitution.md`**: Defines the "laws" of the project—mission, design guidelines, and technical constraints.
- **`plan.md`**: A living document outlining the project phases and milestones.
- **`tasks/`**: 10 detailed task files with specific acceptance criteria, used to guide the AI agent through the implementation.

## Environment Variables

No external API keys or environment variables are required for this demo version, as it uses client-side `localStorage` for persistence.

## Deployment

Deploying AgentIQ on Vercel is straightforward:

1. Push your code to a GitHub repository.
2. Connect the repository to your [Vercel](https://vercel.com) dashboard.
3. Vercel will automatically detect the Next.js project and deploy it.

## Team Members

- **Ali Asgher** - [GitHub Profile](https://github.com/ialiasgher75)
- **Shariq Hussain** - [GitHub Profile][(https://github.com/shariqhussain1)]


---
Built with ❤️ by the AgentIQ Team using **Gemini CLI** and **Spec-Kit Plus**.
