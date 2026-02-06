# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start Vite dev server (default: http://localhost:5173)
- `npm run build` — Production build
- `npm run preview` — Preview production build locally
- `npm run lint` — ESLint with zero warnings allowed (`--max-warnings 0`)
- `npm run format` — Prettier auto-format
- `npm run format:check` — Check formatting without writing

## Architecture

Rush Out is an event ticketing app for Buenos Aires built with **React 18 + TypeScript + Vite + Tailwind CSS v4**.

### Routing

React Router v7 with `BrowserRouter` in `src/App.tsx`. Routes:
- `/` — Home (event listings split by upcoming/past)
- `/login`, `/profile`, `/checkout`, `/intro` — stub pages
- `/event/:id` — dynamic event detail page

### Data Layer

- `src/types/types.ts` — core types: `Event`, `EventCategory`, `HighlightedTag`
- `src/data/events.ts` — generates 100 mock events with dynamic dates (relative to today), pricing/discount logic, and tag assignment based on ticket sell ratio
- `src/data/users.ts` — placeholder for user data

Events rotate through 5 Buenos Aires venues, 6 artists, and 6 categories (Rock, Teatro, Electrónica, Stand Up, Jazz, Indie).

### Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin. Global styles in `src/index.css` with `@import 'tailwindcss'`. Dark theme (black bg, white text) throughout.

## Code Style

- **No semicolons**, single quotes, 2-space indent, trailing commas (es5), 80 char print width
- Arrow parens avoided for single params (`arrowParens: "avoid"`)
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`
- `react/react-in-jsx-scope` is disabled (React 17+ JSX transform)
