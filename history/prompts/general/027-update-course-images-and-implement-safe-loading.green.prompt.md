---
id: 027
title: Update Course Images and Implement Safe Loading
stage: green
date: 2026-06-01
surface: agent
model: gemini-2.0-flash-001
feature: visual-enhancements
branch: main
user: zunai
command: none
labels: ["data", "ui", "error-handling", "accessibility"]
links:
  spec: .spec/plan.md
  ticket: null
  adr: null
  pr: null
files:
  - lib/data.ts
  - components/SafeImage.tsx
  - components/CourseCard.tsx
  - app/courses/[slug]/page.tsx
tests:
  - npm run build
---

## Prompt

Find the courses data file (likely data/courses.ts or lib/courses.ts or constants/courses.ts or inside the page component itself).

Replace ALL course image URLs with these relevant Unsplash images:

1. Introduction to AI → https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=220&fit=crop
2. Python for ML → https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=220&fit=crop
3. Prompt Engineering Mastery → https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=400&h=220&fit=crop
4. Build AI Agents with LangChain → https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=220&fit=crop
5. Fine-tuning LLMs → https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=220&fit=crop
6. AutoGen Multi-Agent Systems → https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=220&fit=crop
7. Vector Databases and RAG → https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=220&fit=crop
8. AI Deployment with FastAPI → https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=220&fit=crop

Also add to every <img> tag:
- onError handler to show a fallback gray placeholder if image fails
- alt text matching the course name

## Response snapshot

I have updated the course data with the eight specific Unsplash URLs requested and implemented a robust image loading system. To handle potential loading errors gracefully (especially in server-side contexts), I created a new `SafeImage` client component. This component is now used in both `CourseCard` and the course detail hero section, ensuring that every course image features an `onError` handler that defaults to a professional gray placeholder. Accessibility is also improved with accurate `alt` text for every image.

## Outcome

- ✅ Impact: Improved visual context for courses and ensured UI stability against external asset failures.
- 🧪 Tests: npm run build (Success)
- 📁 Files: Modified lib/data.ts, CourseCard.tsx, [slug]/page.tsx; Created SafeImage.tsx.
- 🔁 Next prompts: Final project review or deployment.
- 🧠 Reflection: Creating a dedicated `SafeImage` component was necessary to avoid prerendering errors while providing interactive `onError` behavior in a largely static application structure.

## Evaluation notes (flywheel)

- Failure modes observed: Initial attempt to add `onError` directly to server components caused a prerender error; resolved by abstracting to the `SafeImage` client component.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
