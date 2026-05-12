"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import FadeIn from "../FadeIn";
import WorksArrow from "./WorksArrow";
import { WORK_DETAILS } from "./data";

type ShowcaseItem = {
  id: string;
  name: string;
  image: string;
};

const SHOWCASES: ShowcaseItem[] = [
  {
    id: "craftheart",
    name: "Craft Heart",
    image: "/assets/works/showcase-craftheart.webp",
  },
  {
    id: "gogreen",
    name: "GoGreen By Kanya",
    image: "/assets/works/showcase-gogreen.webp",
  },
  {
    id: "wisetniyom",
    name: "Wiset Niyom",
    image: "/assets/works/showcase-wisetniyom.webp",
  },
];

function ShowcaseCard({
  item,
  priority = false,
}: {
  item: ShowcaseItem;
  priority?: boolean;
}) {
  const hasDetail = WORK_DETAILS.some((w) => w.id === item.id);

  const inner = (
    <>
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={priority}
        loading="eager"
        fetchPriority="high"
      />
      <div className="wk-showcase-label">
        <p className="wk-showcase-name">{item.name}</p>
      </div>
    </>
  );

  if (hasDetail) {
    return (
      <Link href={`/works/${item.id}`} className="wk-showcase-card">
        {inner}
      </Link>
    );
  }

  return (
    <a href="#" className="wk-showcase-card">
      {inner}
    </a>
  );
}

export default function ShowcasesSection() {
  const [active, setActive] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const total = SHOWCASES.length;

  const goTo = (index: number) => {
    const nextIndex = Math.max(0, Math.min(total - 1, index));
    setActive(nextIndex);
    viewportRef.current?.scrollTo({
      left: nextIndex * viewportRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  const handleScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const nextIndex = Math.round(viewport.scrollLeft / viewport.clientWidth);
    setActive(Math.max(0, Math.min(total - 1, nextIndex)));
  };

  return (
    <section className="wk-section" id="works">
      <div className="wk-bg-glow" aria-hidden="true" />
      <div className="wk-inner">
        <FadeIn direction="up">
          <h2 className="wk-title">OUR WORKS</h2>
        </FadeIn>
        <FadeIn direction="up" delayMs={100}>
          <div className="wk-label-row">
            <div className="wk-label-accent" />
            <span className="wk-label-text">SHOWCASES</span>
          </div>
        </FadeIn>
      </div>

      <div className="wk-showcases-wrapper">
        {/* Desktop: show all 3 */}
        <div className="wk-showcases wk-showcases--desktop">
          {SHOWCASES.map((item) => (
            <ShowcaseCard key={item.id} item={item} priority />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="wk-showcases wk-showcases--mobile">
          <div
            ref={viewportRef}
            className="wk-showcases-viewport"
            onScroll={handleScroll}
          >
            <div className="wk-showcases-track">
              {SHOWCASES.map((item) => (
                <ShowcaseCard key={item.id} item={item} priority />
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <button
            className="wk-sc-nav wk-sc-nav--prev"
            onClick={prev}
            aria-label="Previous showcase"
          >
            <WorksArrow direction="left" />
          </button>
          <button
            className="wk-sc-nav wk-sc-nav--next"
            onClick={next}
            aria-label="Next showcase"
          >
            <WorksArrow direction="right" />
          </button>

          {/* Dots */}
          <div className="wk-sc-dots">
            {SHOWCASES.map((_, i) => (
              <button
                key={i}
                className={`wk-sc-dot${i === active ? " wk-sc-dot--active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to showcase ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
