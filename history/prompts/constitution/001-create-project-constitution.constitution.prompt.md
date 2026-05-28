---
id: 001
title: Create Project Constitution
stage: constitution
date: 2026-05-29
surface: agent
model: gemini-2.0-flash
feature: none
branch: main
user: zunai
command: null
labels: ["constitution", "setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .spec/constitution.md
tests:
 - null
---

## Prompt

Create the file .spec/constitution.md with this exact content:

# AgentIQ — Constitution

## Mission
Empower people to become AI and Agentic AI engineers through structured, modern, and accessible learning.

## Core Principles
1. Student-first design — every decision serves the learner
2. Learn by doing — practical projects over theory
3. Always updated — content reflects the latest AI trends
4. Community driven — learn together grow together
5. Accessible to all — beginner friendly yet professionally deep

## Technical Standards
- Next.js 14 with App Router only
- TypeScript for every file
- Tailwind CSS for all styling no inline styles
- All static data lives in lib/data.ts
- Components go in /components folder
- Pages go in /app folder

## Design Guidelines
- Primary color Indigo #6366F1
- Secondary color Cyan #06B6D4
- Accent color Amber #F59E0B
- Background Dark #0A0F1E
- Bold typography font-black for all headings
- Mobile-first responsive design
- Gradient buttons and hero sections
- Dark cards bg-slate-800 with rounded-xl

## Development Rules
- No page should exceed 200 lines
- Every page needs a hero section
- All links use next/link
- All images use img tag with picsum.photos
- No external API calls

## Response snapshot

I have created the project constitution file at `.spec/constitution.md` with the specified content and generated the corresponding Prompt History Record (PHR).

## Outcome

- ✅ Impact: Established project mission, principles, and standards.
- 🧪 Tests: No tests required for this documentation task.
- 📁 Files: Created `.spec/constitution.md`.
- 🔁 Next prompts: Continue with project setup or feature implementation.
- 🧠 Reflection: Followed direct instruction while adhering to the PHR creation mandate from GEMINI.md.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
