---
id: 009
title: Build CourseCard Component
stage: green
date: 2026-05-29
surface: agent
model: gemini-2.0-flash
feature: CourseCard
branch: main
user: zunai
command: null
labels: ["component", "coursecard", "ui"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - components/CourseCard.tsx
---

## Prompt

Create components/CourseCard.tsx.

[Full prompt text with styling and data requirements...]

## Response snapshot

I have created the `CourseCard.tsx` component, which is a reusable UI element for displaying course information. It includes image handling, color-coded level badges, category tags, and a gradient "Enroll Now" button with hover effects.

## Outcome

- ✅ Impact: Created a core reusable component for the homepage and courses listing page.
- 🧪 Tests: No automated tests run; verified component structure.
- 📁 Files: Created `components/CourseCard.tsx`.
- 🔁 Next prompts: Build the Homepage hero and section components.
- 🧠 Reflection: Used dynamic classes for level badges to ensure visual clarity.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
