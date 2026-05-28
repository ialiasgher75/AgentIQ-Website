---
id: 006
title: Create Utility Functions
stage: general
date: 2026-05-29
surface: agent
model: gemini-2.0-flash
feature: none
branch: main
user: zunai
command: null
labels: ["utils", "typescript", "tailwind"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - lib/utils.ts
tests:
 - null
---

## Prompt

Create lib/utils.ts. Export these four functions with TypeScript types:

1. Function cn that takes any number of class arguments and returns merged Tailwind classes. Use clsx and twMerge from tailwind-merge.

2. Function formatDuration that takes minutes as number and returns string formatted as Xh Ym. Example 150 returns 2h 30m.

3. Function truncateText that takes text string and maxLength number and returns the text with ... appended if longer than maxLength otherwise returns original text.

4. Function getInitials that takes fullName string and returns uppercase initials of first and last word. Example Ahmed Khan returns AK.

## Response snapshot

I have created `lib/utils.ts` with the requested utility functions: `cn`, `formatDuration`, `truncateText`, and `getInitials`, all with appropriate TypeScript types and documentation.

## Outcome

- ✅ Impact: Provided shared utility logic for class merging, formatting, and string manipulation.
- 🧪 Tests: No tests required; verified logic manually.
- 📁 Files: Created `lib/utils.ts`.
- 🔁 Next prompts: Use these utilities in UI components.
- 🧠 Reflection: standard utility setup for Next.js/Tailwind projects.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
