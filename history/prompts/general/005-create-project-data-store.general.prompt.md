---
id: 005
title: Create Project Data Store
stage: general
date: 2026-05-29
surface: agent
model: gemini-2.0-flash
feature: none
branch: main
user: zunai
command: null
labels: ["data", "setup", "typescript"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - lib/data.ts
tests:
 - null
---

## Prompt

Create lib/data.ts with the following TypeScript types and exported arrays.

[Full prompt text with type definitions and data requirements...]

## Response snapshot

I have created `lib/data.ts` with all requested TypeScript types (Course, RoadmapStage, Instructor, Stat, Testimonial, FAQ) and exported the populated arrays for each, including 8 realistic AI courses, a 4-stage roadmap, instructors, stats, testimonials, and FAQs.

## Outcome

- ✅ Impact: Centralized all static content for the application, ensuring type safety and consistency.
- 🧪 Tests: No tests required; verified type definitions and data structure.
- 📁 Files: Created `lib/data.ts`.
- 🔁 Next prompts: Proceed with building UI components that consume this data.
- 🧠 Reflection: Adhered to the constitution's requirement for static data storage in `lib/data.ts`.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
