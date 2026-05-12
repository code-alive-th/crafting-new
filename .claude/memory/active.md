# Active Work - CRAFTING LAB Landing Page

## Current Focus
✅ Code analysis completed - reviewing entire codebase

## In Progress
- [x] Analyzed package.json and dependencies
- [x] Reviewed all React components (Navbar, Hero, Marquee, About, Services, Works, Clients, Footer, FadeIn)
- [x] Examined layout and main page structure
- [x] Reviewed CSS styling (globals.css)
- [x] Checked configuration files (tsconfig.json, next.config.ts)

## Just Completed
- Full codebase exploration and analysis
- Created memory system for project
- Updated `Works` production showcase arc to a CSS-driven white rounded border on the left of `production-right`
- Converted `Works` production showcase from auto-rotating thumbnails to click-driven thumbnail selection synced with the center video card
- Compressed downloaded production videos in `public/assets/works/videos` for web delivery
- Generated lightweight JPG thumbnails for production videos and wired `Works` to use real video playback with separate thumbnail assets
- Tightened mobile responsiveness to reduce horizontal overflow risks in hero, about, success text, footer, and production sections
- Applied a broader page-wide responsive pass across hero, marquee, about, photo carousel, services, works, production, sports banner, clients, footer, and navbar
- Restored the production curve SVG in `Works` and kept it hidden on mobile/tablet via existing responsive CSS
- Refined the responsive system with section-by-section polish: fluid navbar sizing and scroll offset handling, unified `btn-view-more` styles, variable-driven marquee/photo carousel motion, stronger tablet footer layout, and a cleaner desktop/mobile production thumbnail layout
- Fixed the desktop `production-curve` visibility regression by allowing overflow on `production-right` while preserving clipping on tablet/mobile

## Just Completed
- Implemented Services page (`/services`) from Figma design (node 650-14263)
  - `src/app/services/page.tsx` — route with Navbar + ServicesPage + Footer
  - `src/components/ServicesPage.tsx` — full services page with 3 service blocks (Strategy, Branding, Production), subcards with icons, tags, back-to-top button
  - `public/assets/services/` — hero webp images + SVG icons for each subcard + service-lines.svg decoration
  - CSS added to globals.css under `/* SERVICES PAGE (/services) */` using `.sp-*` prefix
  - Added `service-lines.svg` as decorative background to subcards section
  - Fixed CSS class mismatches (`.sp-subcards` → `.sp-subcards-container`) in responsive media queries
- Reduced `Clients` marquee from 3 rows to 2 rows by merging the third row logos into the second row and removing the extra marquee block
- Slowed the `Clients` marquee animation from `30s` to `45s` for a calmer logo scroll pace
- Tuned `Clients` row speeds separately so the longer second row scrolls slower (`80s`) and feels closer to the first row (`45s`)
- Added an entrance animation to the active `Works` production video so iframe swaps feel smoother on thumbnail change
- Reworked the `Works` production video swap animation to use GSAP on the card itself, making the transition visible during iframe changes
- Reduced `Works` production video swap jank by keeping the card mounted and fading the iframe in over a thumbnail poster while YouTube reloads
- Upgraded `Works` production poster images from YouTube `hqdefault` to `maxresdefault` thumbnails for sharper loading states
- Fixed a React 19 ref callback typing error in `Works` by making the slide ref assignment callback return `void`
- Simplified `VideoProductionSection` to render at most 3 visible video cards around the active item instead of mapping the full repeated track
- Verified the latest `VideoProductionSection` carousel change with a successful `pnpm run build`
- Installed `embla-carousel-react@^8.6.0` to prepare shared carousel logic for the works video and photography sections
- Verified the Embla dependency install with a successful `pnpm run build`
- Migrated `VideoProductionSection` to Embla with a centered 3-card carousel, an `All` filter tab, and side-card thumbnail posters that promote the selected YouTube Short into the center embed
- Replaced `VideoProductionSection` local MP4 sources with the provided YouTube Shorts embeds and YouTube poster thumbnails
- Verified the Embla-based `VideoProductionSection` implementation with a successful `pnpm run build`
- Refined `VideoProductionSection` center playback to follow the `Works` pattern: full-card poster background, inline YouTube player shell, and iframe fade-in on load to avoid the broken full-height black area
- Verified the refined `VideoProductionSection` inline player layout with a successful `pnpm run build`
- Switched `VideoProductionSection` center card to reuse the same `production-video-card` / `production-video-stage` / `production-video-poster` / `production-video` structure as `Works`, with only local size overrides inside the Embla card
- Verified the exact `Works` player structure reuse in `VideoProductionSection` with a successful `pnpm run build`
- Disabled Embla's native loop animation in `VideoProductionSection` and replaced edge wrapping with instant arrow-triggered jumps so the carousel no longer animates visibly to the tail
- Verified the latest `VideoProductionSection` wrap behavior change with a successful `pnpm run build`
- Migrated `VideoProductionSection` from `embla-carousel-react` to `react-slick`, keeping the centered overlay player while moving slide movement/cloning to Slick
- Added `react-slick`, `slick-carousel`, and `@types/react-slick`, then removed the now-unused `embla-carousel-react` dependency
- Verified the `react-slick` migration with successful production builds before and after removing `Embla`
- Reworked `VideoProductionSection` again to use `Swiper` as a page-based slider where each slide represents one page of up to 3 videos, so 5 videos render as page 1 with 3 cards and page 2 with 2 cards
- Removed the abandoned `react-slick`, `slick-carousel`, and `@types/react-slick` dependencies after the `Swiper` migration
- Verified the `Swiper` page-based implementation with a successful `pnpm run build`
- Fixed a `Maximum update depth exceeded` loop in `VideoProductionSection` by memoizing the filtered video list and deriving the page-loading effect from a stable `currentPage` reference
- Added the missing core Swiper layout CSS for `swiper-wrapper` and `swiper-slide`, fixing the issue where all video pages rendered visibly at once instead of one page at a time
- Removed the per-video loading opacity gate in `VideoProductionSection` because the YouTube iframe could stay hidden behind the poster; video players now render immediately instead of getting stuck on thumbnails
- Reworked `VideoProductionSection` pages so each page has only one active playing video at a time; inactive cards are now smaller poster previews, and the active card scales up slightly when playing
- Refined `VideoProductionSection` alignment and visual hierarchy: 3-card pages now default the active player to the middle card, 2-card/1-card pages shrink their row width to the real item count, and the active card now uses a subtler lifted scale treatment
- Removed the active-card scale effect from `VideoProductionSection`, keeping only the center alignment and subtle opacity/saturation contrast
- Unified the `VideoProductionSection` card framing so active and inactive items now share the same shell/viewport, with the active state only swapping the poster media to a YouTube player inside that existing frame
- Replaced the `VideoProductionSection` pagination arrows with custom neon line-arrow SVG icons and removed the previous circular button treatment
- Disabled autoplay for the active YouTube player in `VideoProductionSection`; videos now stay paused until the user presses play
- Removed the `VideoProductionSection` active-card gate so every visible card now mounts its own YouTube iframe immediately, keeps the poster visible while loading, and fades the player in once `onLoad` completes
- Added a visible loading overlay to `VideoProductionSection` thumbnails while each YouTube iframe loads, including a neon spinner and loading chip, and restored the shared desktop `wk-vp-card-shell` frame styling
- Attempted to read the provided Figma file/node via MCP, but direct access is currently blocked because `FIGMA_API_KEY` is not configured in the environment
- Updated the `PhotographySection` headline typography to match the provided spec more closely, switching `wk-ph-title` to a centered Century Gothic outlined treatment with the requested stroke, size, weight, spacing, and capitalization
- Made the `PhotographySection` headline responsive by converting its stroke, size, and letter spacing to `clamp(...)`, preserving the large desktop treatment while keeping the word on one line across smaller breakpoints
- Reworked the `PhotographySection` fan layout to overlap the five cards like the reference by removing the flex gap, adding negative spacing between cards, and assigning higher `z-index` to the center cards while keeping mobile in a non-overlapping horizontal scroll layout
- Tuned the `PhotographySection` fan layout closer to the reference by increasing desktop/tablet card overlap and pulling the stacked images upward so they visually overlap the outlined `PHOTOGRAPHY` headline, while preserving the simpler mobile layout
- Increased the `PhotographySection` fan lift further to match the reference more closely, setting the desktop stack to `margin-top: -200px` and tablet to `-140px`
- Separated the `PhotographySection` footer from the overlapping image stack by increasing `wk-ph-footer` top spacing and giving the footer its own positioned layer above the fan
- Updated `wk-ph-cat` to the requested Century Gothic typography spec and changed `PHOTO_CATEGORIES` to title case so the photography category label renders as capitalized text instead of all caps
- Replaced the `PhotographySection` footer's text arrows with the provided neon SVG arrow shape, mirroring the same right-arrow path for the left button and adding a dedicated `wk-ph-arrow-icon` size rule
- Updated the `PhotographySection` left arrow to use the exact left-arrow SVG path provided by the user instead of a mirrored right-arrow transform

## Next Steps
- Ready for feature requests or modifications
- Can improve design, add functionality, or fix issues
- Available for deployment or further development

## Current Task Notes
- Added LINE Seed Sans TH as a local Thai font with web assets from `/Users/rotoon/Downloads/LINE_Seed_Sans_TH`; registered via `next/font/local` in `src/app/layout.tsx` and added `--font-line-seed-th` as a dedicated Thai stack variable.
- Shifted typography handling to `:lang(th)` only: default heading/body remain `Century Gothic` (no change to English), and Thai-only content now switches to `--font-line-seed-th` through explicit `lang="th"` usage where Thai strings are rendered (`ServiceBlock`, `Works`, `WorkDetailPage`).
- In Footer success banner, `YOUR SUCCESS` and `OUR SUCCESS` were not animating because they were not wrapped with `FadeIn`; fixed by applying `FadeIn` (left/right) around both texts in `src/components/Footer.tsx` with delayed transitions.
- Post-deploy verification after `aa85d1e`: live HTML now preloads only PBIO font plus critical images; deployed mobile Lighthouse improved to performance 96, accessibility 100, SEO 100 with FCP 2.2s and LCP 2.2s; PageSpeed API remained variable with desktop 85 and mobile 49, still flagging unused CSS/JS and main-thread work
- Reduced non-critical font preloads in `src/app/layout.tsx` by setting `preload: false` on Outfit, Syncopate, and FC Minimal while keeping PBIO preloaded for the hero; local production HTML now preloads 1 font instead of 6, and local mobile Lighthouse improved to performance 97, FCP 1.1s, LCP 2.7s
- Post-deploy verification after `13e6c1b`: Lighthouse on `https://crafting-new.up.railway.app/` reported performance 59, accessibility 96, best-practices 96, SEO 100; PageSpeed reported desktop 65 and mobile 55; deployed CSS still served `footer-col-title{color:var(--gray-mid)}` so the footer contrast fix from latest source was not reflected in the live CSS yet
- Deferred homepage `gsap` by replacing the top-level import in `src/components/home/Works.tsx` with dynamic `import("gsap")` inside the production-card animation effect; also raised footer column label contrast in `globals.css`; verified with `pnpm run build` and local Lighthouse (`performance 87`, `accessibility 100`, `SEO 100`)
- Started conservative Hero/LCP pass: added `fetchPriority="high"` to the navbar logo image and hero background image, plus a fixed logo `sizes` hint; verified with `pnpm run build`
- Completed low-risk image loading pass: removed below-fold image priority and added responsive `sizes` in `src/components/home/Works.tsx`, `src/components/home/About.tsx`, and `src/components/home/PhotoCarousel.tsx`; verified with `pnpm run build`
- Fixed Lighthouse heading-order warning by changing footer column labels from `h4.footer-col-title` to `p.footer-col-title` in `src/components/Footer.tsx`; verified with `pnpm run build`
- Fixed invalid Codex skill metadata for `seo-analysis` and `seo-page` by shortening their `description` frontmatter below the 1024-character loader limit
- Installed additional Codex skills from `nowork-studio/toprank`: SEO (`broken-link-checker`, `content-writer`, `keyword-research`, `meta-tags-optimizer`, `schema-markup-generator`, `seo-analysis`, `seo-page`, `setup-cms`) and Google Ads (`ads-audit`, `ads-copy`, `ads-landing`, `ads`)
- Installed Codex skill `toprank-upgrade-skill` from `nowork-studio/toprank` path `toprank-upgrade-skill` into `/Users/rotoon/.codex/skills/toprank-upgrade-skill`
- Read Figma file `0QWfGP3yT9dnmoFiBEwSyC` node `2104:10164` successfully via MCP
- Confirmed the node is a multi-brand portfolio board, not a single landing-page frame
- Identified the colored logo node for each lower brand variant under the board
- Added `public/assets/brand-logos-real/manifest.json` mapping 20 brand entries to their lower variant and logo node IDs for direct export later
- Confirmed some logos export cleanly as SVG, but larger ones are truncated in tool output; PNG export is the safer bulk-export path
- Created `public/assets/works/portfolio/details/clients/` and populated it with 23 client logo files named by work/detail slug where possible
- Updated `src/components/works/data.ts` so all `WORK_DETAILS.logo` paths now point to `/assets/works/portfolio/details/clients/*`
- Added a per-card scroll-triggered reveal for `GRAPHIC_DESIGN_ITEMS` in `GraphicDesignSection`, observing each card individually so lower rows do not animate before entering the viewport; verified with `pnpm run build`
- Compressed all 74 `public/assets/works/portfolio/details/*.webp` images from about 350.6MB to 22.4MB by resizing to max-width 2200px at WebP quality 90; enabled Next/Image AVIF+WebP output and added `sizes` to work detail images; verified with `pnpm run build`
- Added Vercel Analytics and Speed Insights to the root layout and dependencies; verified with `pnpm run build`
- Replaced the Services production hero asset reference with `/assets/services/service-production.webp`, re-encoded the WebP, removed the unused PNG, and verified with `pnpm run build`
- Converted the new `public/assets/services/service-production.jpg` source into optimized `service-production.webp` (1534px wide), removed the temporary JPG, and verified with `pnpm run build`
- Reworked the home `Clients` section into a visual overlay section using `public/assets/athlete-banner1.webp`, removed the separate `SportsBanner` render/component/CSS, kept the existing 2-row logo marquee sizing, and verified with `pnpm run build` plus desktop/mobile Playwright screenshots.
- Extended the `athlete-banner1.webp` visual background to wrap both `production-showcase` and `Clients` via `production-clients-visual`, placing production above and clients below on one full-height background; verified with `pnpm run build` and desktop/mobile Playwright screenshots.
- Added `loading="eager"` and `fetchPriority="high"` to the active production YouTube poster image in `src/components/home/Works.tsx` to address the LCP warning for `UPqGsHt7fkA/maxresdefault.jpg`.
- Re-encoded `public/assets/athlete-banner.webp` from the oversized `6000x14229` source down to `2400x5692` at WebP quality 82, keeping the same path so CSS layout height remains unchanged while reducing the background payload.
- Updated home `Works` carousel info so the Thai carousel description is marked with `lang="th"` and `.carousel-info :lang(th)` uses the LINE Seed Sans TH font variable.
- Added `loading="eager"` and `fetchPriority="high"` to the `/assets/athlete-banner.webp` background `Image` in `src/components/home/Works.tsx` after Lighthouse detected it as LCP.
- Made services subcard top labels such as `RESEARCH`, `CONSULTING`, and `FINAL KPI` bold by matching `.sp-subcard-title-top` to the bottom label font weight.
- Replaced FC Minimal usage with LINE Seed Sans TH: removed the FC Minimal font registration/class from `src/app/layout.tsx`, mapped `--font-fc-minimal` to `--font-line-seed-th` for compatibility, and updated services subcard line text to use LINE directly.
- Wired the contact form to real email delivery via `src/app/api/contact/route.ts`, using the Resend REST API with `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`; `ContactPage` now POSTs to `/api/contact` with loading and failure states instead of marking success locally.
- Tested contact email delivery with `.env.local`; fixed `CONTACT_FROM_EMAIL` quoting for shell compatibility, then Resend returned `403 validation_error` because the `craftinglab.co` sending domain is not verified in Resend yet.
- Retested after the Resend API key/domain update on 2026-05-12: direct Resend API returned `200` with an email id, and local `POST /api/contact` returned `200 {"ok":true}` using `.env.local`.
- Ran `pi update`: updated npm package `@upstash/context7-mcp`; Pi itself is already up to date at `v0.74.0`.
- Audited live `https://www.craftinglab.co/` with headless Lighthouse/Chrome DevTools for main pages only (`/`, `/services`, `/works`, `/contact`); work detail pages were skipped per user. Latest report dir: `/tmp/craftinglab-lighthouse-all-20260512-151056`. Main issue: mobile `/works` score 79 due to LCP image `showcase-craftheart.webp` lazy-loaded without high priority, causing ~4.6s LCP.
- Fixed mobile `/works` LCP by marking the first showcase card image as priority/eager/high fetch priority in `ShowcasesSection`; added responsive `sizes` to services hero/subcard images and lazy-loaded non-first service hero images. Verified with `pnpm run build` and local headless Lighthouse for `/works` mobile: performance 99, LCP 1.9s.
- Re-tested deployed `https://www.craftinglab.co/` with headless Lighthouse after deployment. Report dir: `/tmp/craftinglab-lighthouse-live-after-20260512-153838`. Live HTML confirms `/works` first showcase image now has `fetchpriority="high"` and `loading="eager"`, but mobile `/works` remains 79 with LCP ~4.6s due to slow resource load duration for the LCP image on production; desktop scores remain strong.
- Removed 13 unused public image assets after scanning source references and dynamic client-logo usage: old glow assets, unused service-branding WebP, old local video thumbnail WebPs, and default Next starter SVGs. Verified with `pnpm run build`; saved ~0.93 MiB.
- Scanned remaining public images for oversized assets: 199 images total, ~45.42 MiB. Biggest optimization targets are `public/assets/works/photography/*.webp` (~18.01 MiB, can shrink to ~1.76 MiB at max edge 1200/q82), `public/assets/works/portfolio/details/*.webp` (~22.0 MiB, can shrink to ~10.24 MiB at max edge 1800/q82), plus home carousel/photos and `crew-bg.webp` for ~2.24 MiB more savings.
- Optimized 105 image assets using `cwebp` quality 85: `works/photography` max edge 1200px, work detail images max edge 1800px, home carousel/photos max edge 1200px, and `crew-bg.webp` max edge 2400px. Saved ~28.58 MiB total; `public/assets` dropped to ~17 MiB. Verified with `pnpm run build`.
- Re-tested live `https://www.craftinglab.co/` after image optimization deploy with headless Lighthouse. Report dir: `/tmp/craftinglab-lighthouse-live-check-20260512-160628`. Scores: home mobile/desktop 84/95, services 96/100, works 78/98, contact 94/100. Live optimized asset sizes were confirmed for `ph-14.webp`, `crew-bg.webp`, and `gogreen-4.webp`; remaining issue is mobile `/works` LCP resource load duration (~3.8s) for `showcase-craftheart.webp`, plus home mobile TTFB/network variability.
- Final `/works` LCP pass: re-encoded all three showcase images to 720px/q75, added Next image qualities `[40,65,75,85]`, and served priority showcase image at quality 40 while non-priority showcases use 65. Local production Lighthouse `/works` mobile now scores 99 with LCP 1.6s; LCP image request dropped from ~71KB to ~19KB AVIF.
- Updated `VideoProductionSection` on `/works` to use the same poster-first YouTube loading pattern as the homepage Production section: each card keeps a thumbnail poster behind the iframe, fades the iframe in on `onLoad`, resets loading per video change, and applies the same GSAP blur/slide/scale entrance animation. Verified with `pnpm run build`.
- Improved `/works` mobile UX: Video Production now switches from 3 videos per page to 1 video per page at <=768px, only mounts YouTube iframes for the active page, resets pagination on category/layout changes, shows showcase labels without relying on hover, and displays Graphic Design cards in a 2-column color-logo grid on mobile. Verified with `pnpm run build`.
- Added native scroll-snap swipe support to the `/works` Showcases carousel for mobile/tablet, tuned mobile card height to `clamp(320px, 108vw, 460px)` and tablet height to `clamp(380px, 58vw, 520px)`, and set all showcase carousel images to eager/high-priority loading so swiping to later slides does not show blank images. Verified with `pnpm run build`; checked tablet emulation at 820px where carousel display is active, scroll advances to slide 2, image is complete, and no horizontal page overflow.
- Restored the Work Detail `Back to Menu` control on mobile/tablet by changing the <=900px CSS from `display:none` to a fixed bottom-right pill button with 44px+ touch target, neon border, and blur background. Verified with `pnpm run build`.
- Stopped the local Next server on port 3100. Enabled explicit swipe behavior for `/works` Video Production Swiper with `simulateTouch`, low movement threshold, `touchStartPreventDefault={false}`, and touch-action/cursor CSS on the video swiper/cards. Verified with `pnpm run build` and confirmed port 3100 is no longer listening.
- Fixed `/works` mobile Showcases visibility again by forcing mobile/tablet carousel images to `object-fit: contain` with a dark green backing so wide showcase art does not crop to blank/solid areas. Also improved Video Production playability on mobile/tablet with a large explicit poster play button, autoplay-on-user-tap iframe mounting, Swiper `preventClicks={false}`, `preventClicksPropagation={false}`, and `noSwipingSelector=".swiper-no-swiping"`. Verified with `pnpm run build` and stopped port 3100 afterward.
