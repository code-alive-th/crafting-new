# PROJECT SUMMARY - CRAFTING LAB

## 📋 Project Overview
**Name:** CRAFTING LAB
**Type:** Modern B2B Landing Page
**Purpose:** Digital Marketing Agency Website
**Status:** ✅ Active & Functional

## 🛠️ Tech Stack
| Category | Technology |
|----------|-----------|
| Framework | Next.js 16.2.1 |
| Runtime | React 19.2.4 |
| Language | TypeScript 5 |
| Styling | Custom CSS + Tailwind 4 |
| Fonts | Google Fonts (Outfit, DM Sans, Syncopate) + Local (PBIO) |

## 📁 Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts setup
│   ├── page.tsx        # Main page (8 sections)
│   └── globals.css     # Global styling
├── components/
│   ├── Navbar.tsx      # Navigation with scroll detection
│   ├── Hero.tsx        # Hero section with parallax
│   ├── Marquee.tsx     # Animated brand scroll
│   ├── About.tsx       # About section with counters
│   ├── Services.tsx    # 3-service cards
│   ├── Works.tsx       # Portfolio showcase & videos
│   ├── Clients.tsx     # Client logos carousel
│   ├── Footer.tsx      # Footer with contact & social
│   └── FadeIn.tsx      # Reusable fade-in animation component
```

## 🎨 Design System
**Colors:**
- Primary Green: `#00FF00` (neon accent)
- Background: `#1e1e1e` (dark)
- Text: `#ffffff` (white)
- Secondary Gray: `#a6a6a6`, `#6d6e70`

**Typography:**
- Heading: Outfit font
- Body: DM Sans font
- Special: Syncopate font

**Max Width:** 1440px

## 📄 Key Sections (8 total)
1. **Navbar** - Fixed nav with logo, menu links, smooth scroll, mobile toggle
2. **Hero** - Full-screen banner with parallax effect
3. **Marquee** - Animated brand name scroll bar
4. **About** - Company info with 50+ clients, 7+ years stats
5. **Services** - 3 main services (Strategy, Branding, Production)
6. **Works** - Portfolio showcase with carousel (1 project: Go Green by Kanya)
7. **Clients** - 3-row marquee carousel with logo placeholders
8. **Footer** - Contact info, social links, company address

## ⚡ Interactive Features
✅ Smooth scroll navigation
✅ Parallax effect on Hero
✅ Scroll-triggered fade-in animations
✅ Active menu highlighting
✅ Counter animations (About stats)
✅ Mobile responsive hamburger menu
✅ Canvas-based dot pattern in footer

## 📱 Responsive Design
- Mobile: Hamburger menu toggle
- Tablet/Desktop: Full navigation menu
- Padding adjustments: 100px horizontal on desktop

## 🌐 Contact Info
- Phone: 08-4169-6906
- Email: craftinglab.co@gmail.com
- Location: San Kamphaeng, Chiang Mai, Thailand
- Social: Facebook, Instagram

## 📝 Language Mix
- Thai text in: Works section, About section content
- English labels and navigation
- Thai: ทีมโปรดักชั่น (Production team)

## 🎯 Completed Features
✅ Modern luxury design
✅ Smooth animations & transitions
✅ Fully responsive layout
✅ Performance optimized (Image optimization)
✅ Accessibility basics (alt text, ARIA labels)
✅ SEO metadata

## 🔧 Development Notes
- No external UI libraries (shadcn/ui, Tailwind components)
- Custom CSS only
- Client-side components only ("use client" directives)
- Intersection Observer for animations
- Canvas API for dot pattern
- TypeScript strict mode enabled
