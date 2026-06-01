---
id: 026
title: Implement Smart Course Assistant
stage: green
date: 2026-06-01
surface: agent
model: gemini-2.0-flash-001
feature: smart-chatbot
branch: main
user: zunai
command: none
labels: ["chatbot", "ux", "interactive", "rule-based"]
links:
  spec: .spec/plan.md
  ticket: null
  adr: null
  pr: null
files:
  - components/ChatWidget.tsx
tests:
  - npm run build
---

## Prompt

Update the existing chatbot to be a smart Course Assistant. Make it functional (not static).

Chatbot behavior:
- ONLY answer questions related to courses available on this platform
- If user asks anything unrelated, respond: "I can only help you with course-related questions. Ask me about our courses!"

The chatbot should be able to:
1. List all available courses when asked
2. Suggest a course based on user interest (e.g., "I want to learn programming" → suggest Web Dev or Python course)
3. Give details about a specific course: duration, price, level, what they'll learn
4. Answer: "Which course is best for beginners?" / "What is the fee?" / "How long is this course?"
5. Help user decide: ask 1-2 questions like "What is your background?" or "What is your goal?"

Implementation:
- Create a courses data array/object in JS with all course info (name, price, duration, level, topics)
- Bot reads from this data to answer
- Simple rule-based matching: check user message for keywords (course names, topics, "fee", "duration", "beginner", "recommend", etc.)
- Show suggested course as a clickable card/link inside the chat
- Bot greeting: "Hi! I'm your Course Assistant. Ask me about any course or tell me your interest and I'll suggest the best one for you!"

## Response snapshot

I have upgraded the `ChatWidget` into a functional, data-driven Course Assistant. The assistant now utilizes the application's `lib/data.ts` to provide accurate, domain-specific information. It features a rule-based engine capable of listing courses, providing specific details (fee, level, duration), and offering intelligent recommendations based on user keywords (e.g., "programming", "agent", "LLM"). Additionally, responses can include clickable action links that direct users straight to course pages, enhancing the conversion funnel. Strict domain enforcement ensures the bot remains focused on educational assistance.

## Outcome

- ✅ Impact: Improved user engagement and provided a helpful guidance tool for prospective students.
- 🧪 Tests: npm run build (Success)
- 📁 Files: Modified ChatWidget.tsx.
- 🔁 Next prompts: Continue with final deployment steps.
- 🧠 Reflection: Leveraging the existing centralized data store ensures the bot's knowledge is always in sync with the platform's actual offerings.

## Evaluation notes (flywheel)

- Failure modes observed: none.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
