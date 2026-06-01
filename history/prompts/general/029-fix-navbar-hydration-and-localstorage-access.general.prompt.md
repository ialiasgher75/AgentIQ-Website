---
id: 029
title: Fix Navbar Hydration and localStorage Access
stage: green
date: 2026-06-01
surface: agent
model: gemini-2.0-flash-001
feature: navigation
branch: main
user: zunai
command: none
labels: ["fix", "ssr", "hydration", "navbar"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - components/Navbar.tsx
tests:
  - npm run build
---

## Prompt

Fix the Navbar component so Dashboard link works on Vercel (production).

The issue is localStorage is being accessed before component mounts, causing it to not show on server-side rendering.

Apply this fix in components/Navbar.tsx:

1. Make sure 'use client' is at the very top of the file
2. Replace any direct localStorage access with this pattern:
   const [isEnrolled, setIsEnrolled] = useState(false)
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
     setMounted(true)
     try {
       const courses = localStorage.getItem('enrolledCourses')
       if (courses && JSON.parse(courses).length > 0) {
         setIsEnrolled(true)
       }
     } catch (e) {
       setIsEnrolled(false)
     }
   }, [])

   if (!mounted) return null
3. Dashboard link conditionally:
   {isEnrolled && (
     <Link href="/dashboard">Dashboard</Link>
   )}
4. Make sure useState and useEffect are imported from 'react'

## Response snapshot

I have refactored the `Navbar` component to resolve hydration mismatches caused by direct `localStorage` access during server-side rendering. By implementing a `mounted` state and wrapping the enrollment check in a `useEffect` hook, the "Dashboard" link now correctly renders only on the client side after the application has hydrated. This fix ensures stability in production environments like Vercel and prevents UI inconsistencies between server and client versions of the component.

## Outcome

- ✅ Impact: Resolved a production-critical UI bug and ensured reliable navigation to the User Dashboard.
- 🧪 Tests: npm run build (Success)
- 📁 Files: Modified components/Navbar.tsx.
- 🔁 Next prompts: Final project wrap-up or specific feature polish.
- 🧠 Reflection: The "mounted" state pattern is an essential best practice in Next.js when interacting with browser-only APIs like `localStorage` to maintain hydration integrity.

## Evaluation notes (flywheel)

- Failure modes observed: none.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
