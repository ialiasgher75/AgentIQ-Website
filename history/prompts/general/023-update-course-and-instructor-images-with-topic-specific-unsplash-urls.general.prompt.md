---
id: 023
title: Update Course and Instructor Images with Topic-Specific Unsplash URLs
stage: green
date: 2026-06-01
surface: agent
model: gemini-2.0-flash-001
feature: none
branch: main
user: zunai
command: none
labels: ["data", "images", "ui", "unsplash"]
links:
  spec: .spec/plan.md
  ticket: null
  adr: null
  pr: null
files:
  - lib/data.ts
tests:
  - npm run build
---

## Prompt

Replace the images on all course cards with relevant, topic-specific images.

Use free high-quality image URLs from Unsplash (unsplash.com) that match each course topic. For example:
- Web Development course → coding/laptop image
- Data Science / AI course → data/charts/AI image  
- Design course → design tools/colors image
- Business course → office/professional image
- Mobile Dev course → smartphone/app image

For each course card:
1. Find the <img> tag or background image
2. Replace src/url with a relevant Unsplash image URL using format:
   https://images.unsplash.com/photo-[ID]?w=400&h=250&fit=crop
3. Add meaningful alt text describing the course topic

Make sure every course card has a unique, relevant image that reflects its subject matter.

## Response snapshot

I have updated `lib/data.ts` to replace all placeholder images for courses and instructors with relevant, high-quality Unsplash URLs. Each course now features a unique image that reflects its specific topic (AI, Python, Prompt Engineering, LangChain, etc.), formatted with optimized dimensions. Instructor profiles have also been updated with professional Unsplash headshots.

## Outcome

- ✅ Impact: Significantly improved the visual quality and contextual relevance of course listings.
- 🧪 Tests: npm run build (Success)
- 📁 Files: Modified lib/data.ts
- 🔁 Next prompts: Continue with deployment or further data enhancements.
- 🧠 Reflection: Using specific Unsplash IDs ensures a professional look while following the requested format.

## Evaluation notes (flywheel)

- Failure modes observed: none.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
