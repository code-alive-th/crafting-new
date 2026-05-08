---

# CRAFTING LAB — Agent Instructions

## Project Identity
- **Name:** CRAFTING LAB
- **Type:** B2B Digital Marketing Agency Landing Page
- **Stack:** Next.js 16.2.1 · React 19.2.4 · TypeScript 5 (strict)
- **Styling:** Custom CSS only (`src/app/globals.css`) — no Tailwind utilities, no component libraries

## Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout — fonts, metadata
│   ├── page.tsx        # Single page — 8 sections in order
│   └── globals.css     # All styles live here
└── components/
    ├── FadeIn.tsx       # Reusable Intersection Observer wrapper
    ├── Navbar.tsx       # Fixed nav, scroll-detect, mobile toggle
    ├── Hero.tsx         # Full-screen parallax hero
    ├── Marquee.tsx      # Animated SVG scroll bar
    ├── About.tsx        # Stats with animated counters
    ├── Services.tsx     # 3-service row layout
    ├── Works.tsx        # Portfolio carousel + video section
    ├── Clients.tsx      # 3-row logo marquee
    └── Footer.tsx       # Contact + social + canvas dots
```

## Design System
```
Colors:
  --green:      #00FF00   ← neon accent (highlights, active states, CTA)
  --black:      #1e1e1e   ← background
  --white:      #ffffff   ← primary text
  --gray-light: #a6a6a6
  --gray-mid:   #6d6e70

Fonts:
  Outfit     → headings (var(--font-outfit))
  DM Sans    → body (var(--font-dm-sans))
  Syncopate  → decorative (var(--font-syncopate))
  PBIO       → brand/logo (var(--font-pbio)) — local font

Layout:
  --max-width: 1440px
  Section padding: 80–120px vertical, 100px horizontal
```

## Hard Rules for All Agents
- **No component libraries** — shadcn/ui, Radix, MUI are not installed
- **No Tailwind utility classes** — only custom CSS class names
- **Always use `next/image`** for images — never `<img>`
- **`"use client"`** is required on any component using hooks or browser APIs
- **TypeScript strict** — no `any`, explicit event types, typed props
- **Cleanup `useEffect`** — always return cleanup for event listeners and observers

## Coding Patterns

### Fade-in animation
```tsx
import FadeIn from "./FadeIn";
<FadeIn direction="up" delayMs={100}>…</FadeIn>
// direction: "up" | "left" | "right"
```

### Scroll listener
```tsx
useEffect(() => {
  const onScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

### Intersection Observer
```tsx
const ref = useRef<HTMLDivElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => { if (entries[0].isIntersecting) { /* … */ } },
    { threshold: 0.1 }
  );
  const el = ref.current;
  if (el) observer.observe(el);
  return () => { if (el) observer.unobserve(el); };
}, []);
```

### Section skeleton
```tsx
<section className="xxx-section" id="xxx">
  <div className="xxx-inner">
    {/* content */}
  </div>
</section>
```

## Specialised Agents
| Task | Agent file |
|------|-----------|
| Build / edit UI components | `.claude/agents/ui-agent.md` |
| Add logic & interactivity | `.claude/agents/dev-agent.md` |
| Style & visual polish | `.claude/agents/design-agent.md` |
| Planning & orchestration | `.claude/agents/plan-agent.md` |
| Debug (`/toh:fix`) & deploy (`/toh:ship`) | `.claude/agents/core-orchestrator.md` |

## Memory
Read `.claude/memory/summary.md` and `.claude/memory/active.md` before starting any task.
Update `.claude/memory/active.md` after every task.

## Known Gaps (open work)
- `Works` carousel — slide interaction not yet implemented
- `Clients` section — logo placeholders, no real images yet
- `CTA` section — empty, no content yet
- "See All" links point to `#` (no target pages)
