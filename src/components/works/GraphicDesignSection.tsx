"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../FadeIn";
import { GRAPHIC_DESIGN_ITEMS, WORK_DETAILS } from "./data";

export default function GraphicDesignSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const detailIds = new Set(WORK_DETAILS.map((w) => w.id));

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".wk-gd-card"));
    if (cards.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      cards.forEach((card) => card.classList.add("wk-gd-card--visible"));
      return () => {
        cards.forEach((card) => card.classList.remove("wk-gd-card--visible"));
      };
    }

    const setCardDelays = () => {
      const columnCount = Math.max(
        getComputedStyle(grid)
          .gridTemplateColumns.split(" ")
          .filter(Boolean).length,
        1,
      );

      cards.forEach((card, index) => {
        card.style.setProperty(
          "--wk-gd-delay",
          `${(index % columnCount) * 85}ms`,
        );
      });
    };

    const revealCard = (card: Element) => {
      card.classList.add("wk-gd-card--visible");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealCard(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.18,
      },
    );

    setCardDelays();
    cards.forEach((card) => observer.observe(card));
    grid.classList.add("wk-gd-grid--reveal");
    window.addEventListener("resize", setCardDelays);

    return () => {
      window.removeEventListener("resize", setCardDelays);
      observer.disconnect();
      grid.classList.remove("wk-gd-grid--reveal");
      cards.forEach((card) => {
        card.classList.remove("wk-gd-card--visible");
        card.style.removeProperty("--wk-gd-delay");
      });
    };
  }, []);

  return (
    <section className="wk-gd-section">
      <div className="wk-inner">
        <FadeIn direction="up">
          <div className="wk-label-row">
            <div className="wk-label-accent" />
            <span className="wk-label-text wk-label-text--white">
              GRAPHIC DESIGN
            </span>
          </div>
        </FadeIn>
      </div>

      <div ref={gridRef} className="wk-gd-grid">
        {GRAPHIC_DESIGN_ITEMS.map((item) => {
          const cardInner = (
            <div className="wk-gd-card-inner">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
                className="wk-gd-card-img wk-gd-img-dark"
                unoptimized
              />
              <Image
                src={item.hoverImage}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
                className="wk-gd-card-img wk-gd-img-color"
                unoptimized
              />
            </div>
          );

          if (!detailIds.has(item.id)) {
            return (
              <div key={item.id} className="wk-gd-card wk-gd-card--disabled">
                {cardInner}
              </div>
            );
          }

          return (
            <Link key={item.id} href={`/works/${item.id}`} className="wk-gd-card">
              {cardInner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
