"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import FadeIn from "../FadeIn";
import type { ServiceData } from "./data";

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -120px 0px" },
    );
    obs.observe(el);
    return () => {
      if (el) obs.unobserve(el);
    };
  }, [threshold]);

  return { ref, visible };
}

interface ServiceBlockProps {
  svc: ServiceData;
  index: number;
}

export default function ServiceBlock({ svc, index }: ServiceBlockProps) {
  const { ref, visible } = useScrollReveal(0.2);
  const baseDelay = index * 100;

  return (
    <div className="sp-service-block">
      {svc?.photo && (
        <FadeIn direction="down" delayMs={baseDelay}>
          <div className="sp-block-hero">
            <Image
              src={svc.photo.src}
              alt={svc.photo.alt}
              width={svc.photo.width}
              height={svc.photo.height}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) calc(100vw - 80px), 1086px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </FadeIn>
      )}

      <FadeIn direction="left" delayMs={baseDelay + 100}>
        <h2 className="sp-service-title">{svc.title}</h2>
      </FadeIn>
      <FadeIn direction="left" delayMs={baseDelay + 150}>
        <p className="sp-service-desc">{svc.description}</p>
      </FadeIn>

      <div className="sp-subcards-wrapper" ref={ref}>
        <div className="sp-subcards-container">
          {svc.subCards.map((card, ci) => (
            <div
              key={card.titleTop || card.photo?.src || ci}
              className={`sp-subcard ${visible ? "sp-subcard-visible" : ""}`}
              style={{
                transitionDelay: `${ci * 150}ms`,
                ...(card.photo ? { flex: 2, padding: 0 } : {}),
              }}
            >
              {card.photo ? (
                <Image
                  src={card.photo.src}
                  alt={card.photo.alt}
                  width={card.photo.width}
                  height={card.photo.height}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) calc(100vw - 80px), 650px"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <>
                  <div className="sp-subcard-icon">
                    <Image
                      src={card.icon!}
                      alt={card.titleTop!}
                      width={card.iconW!}
                      height={card.iconH!}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="sp-subcard-titles">
                    <span className="sp-subcard-title-top">
                      {card.titleTop}
                    </span>
                    <span className="sp-subcard-title-bottom">
                      {card.titleBottom}
                    </span>
                  </div>
                  <div className="sp-subcard-lines">
                    {card.lines?.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="sp-tags-section">
        <FadeIn direction="left" delayMs={baseDelay + 100}>
          <div className="sp-divider-line"></div>
        </FadeIn>
        <div className="sp-tags-wrap">
          <FadeIn direction="up" delayMs={baseDelay + 150}>
            <span className="sp-tags-label">Services include:</span>
          </FadeIn>
          {svc.tags.map((tag, ti) => (
            <FadeIn
              key={tag}
              direction="up"
              delayMs={baseDelay + 200 + ti * 40}
            >
              <span className="sp-tag">{tag}</span>
            </FadeIn>
          ))}
        </div>
        <FadeIn direction="right" delayMs={baseDelay + 150}>
          <div className="sp-divider-line"></div>
        </FadeIn>
      </div>
    </div>
  );
}
