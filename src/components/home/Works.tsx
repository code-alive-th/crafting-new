"use client";
import { useState, useRef, useEffect, type ReactNode } from "react";
import FadeIn from "../FadeIn";
import Image from "next/image";

type Gsap = typeof import("gsap").gsap;

// Production showcase: 3 slot positions
const PROD_SLOTS = [
  { right: 0, top: 52, width: 198, height: 126, z: 3 }, // slot 0: medium, upper
  { right: 22, top: 226, width: 272, height: 174, z: 5 }, // slot 1: large, center
  { right: 0, top: 450, width: 198, height: 126, z: 3 }, // slot 2: medium, lower
];

const PRODUCTION_ITEMS = [
  {
    id: "cockpit-b-com",
    title: "Cockpit B Com Service",
    type: "Short Video Ads",
    src: "https://www.youtube.com/embed/UPqGsHt7fkA",
    thumbnail: "https://img.youtube.com/vi/UPqGsHt7fkA/maxresdefault.jpg",
    alt: "Cockpit B Com Service — Short Video Ad",
  },
  {
    id: "blanc-chiang-mai",
    title: "Blanc Chiang Mai",
    type: "Short Video Ads",
    src: "https://www.youtube.com/embed/XAQn98HVJw4",
    thumbnail: "https://img.youtube.com/vi/XAQn98HVJw4/maxresdefault.jpg",
    alt: "Blanc Chiang Mai — Short Video Ad",
  },
  {
    id: "wisetniyom",
    title: "Wisetniyom",
    type: "Short Video",
    src: "https://www.youtube.com/embed/HVRnOXuqMYI",
    thumbnail: "https://img.youtube.com/vi/HVRnOXuqMYI/maxresdefault.jpg",
    alt: "Wisetniyom — Short Video",
  },
  {
    id: "mcarthur-bloc",
    title: "McARTHUR Bloc",
    type: "Short Video",
    src: "https://www.youtube.com/embed/Sldg55p42jU",
    thumbnail: "https://img.youtube.com/vi/Sldg55p42jU/maxresdefault.jpg",
    alt: "McARTHUR Bloc — Short Video",
  },
  {
    id: "craft-heart",
    title: "Craft Heart",
    type: "Short Video Review",
    src: "https://www.youtube.com/embed/aaqykWnnUzE",
    thumbnail: "https://img.youtube.com/vi/aaqykWnnUzE/maxresdefault.jpg",
    alt: "Craft Heart — Short Video Review",
  },
];

const projects = [
  {
    id: "gogreen",
    title: "Go Green by Kanya",
    desc: "Crafting Lab เริ่มตั้งแต่วาง Concept Branding ไปจนถึงการช่วย ออกแบบร้านกว่า 13 สาขา ต่อยอดทั้ง Online + Offline ให้ร้านเป็นที่รู้จัก ปรับเปลี่ยนการสื่อสารให้ถูกต้องตามข้อกฏหมายให้เป็น GoGreen Consult Center",
    image: "/assets/works/carousel-1.webp",
  },
  {
    id: "wisetniyom",
    title: "Wisetniyom",
    desc: "เราร่วมคิดตั้งแต่ CONCEPT IDEA ร้าน และนำมาออกแบบ CI BRANDING ที่เป็นเอกลักษณ์ ออกแบบ FONT สำหรับใช้ในงานดีไซน์ของร้าน รวมถึงดูแลช่องทางสื่อสารออนไลน์ของแบรนด์และสื่อออฟไลน์ต่าง ๆ ณ จุดขาย",
    image: "/assets/works/carousel-2.webp",
  },
  {
    id: "craftheart",
    title: "Craft Heart",
    desc: "เพจรีวิวร้าน อีเวนต์ กิจกรรมในเชียงใหม่ เราทำโปรดักชันตั้งแต่ถ่ายภาพ ถ่ายวิดีโอ ตัดต่อ วางคอนเซ็ปและคอนเทนต์ พร้อมวางแผนโพสต์ประจำแต่ละเดือน",
    image: "/assets/works/carousel-3.webp",
  },
];

type WorksProps = {
  clientsSlot?: ReactNode;
};

export default function Works({ clientsSlot }: WorksProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProductionIndex, setActiveProductionIndex] = useState(0);
  const [isProductionLoading, setIsProductionLoading] = useState(true);
  const total = projects.length;
  const carouselRef = useRef<HTMLDivElement>(null);
  const productionVideoCardRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const gsapRef = useRef<Gsap | null>(null);

  useEffect(() => {
    let cancelled = false;
    const card = productionVideoCardRef.current;
    if (!card) return;

    void import("gsap").then(({ gsap }) => {
      if (cancelled) return;
      gsapRef.current = gsap;
      gsap.killTweensOf(card);
      gsap.fromTo(
        card,
        {
          opacity: 0.4,
          y: 24,
          scale: 0.975,
          filter: "blur(10px) saturate(0.8)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px) saturate(1)",
          duration: 0.7,
          ease: "power3.out",
        },
      );
    });

    return () => {
      cancelled = true;
      gsapRef.current?.killTweensOf(card);
    };
  }, [activeProductionIndex]);

  const handleSlideClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleSlideKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (index === activeIndex) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSlideClick(index);
    }
  };

  const handleProductionChange = (index: number) => {
    if (index === activeProductionIndex) return;
    setIsProductionLoading(true);
    setActiveProductionIndex(index);
  };

  const getRole = (i: number): "main" | "secondary" | "peek" => {
    if (i === activeIndex) return "main";
    if (activeIndex === 0) return i === 1 ? "secondary" : "peek";
    if (activeIndex === 1) return i === 0 ? "peek" : "secondary";
    return i === 0 ? "peek" : "secondary";
  };

  const active = projects[activeIndex];
  const activeProduction = PRODUCTION_ITEMS[activeProductionIndex];
  const visibleProductionItems = [
    {
      item: PRODUCTION_ITEMS[
        (activeProductionIndex - 1 + PRODUCTION_ITEMS.length) %
          PRODUCTION_ITEMS.length
      ],
      slot: 0,
      index:
        (activeProductionIndex - 1 + PRODUCTION_ITEMS.length) %
        PRODUCTION_ITEMS.length,
    },
    {
      item: PRODUCTION_ITEMS[activeProductionIndex],
      slot: 1,
      index: activeProductionIndex,
    },
    {
      item: PRODUCTION_ITEMS[
        (activeProductionIndex + 1) % PRODUCTION_ITEMS.length
      ],
      slot: 2,
      index: (activeProductionIndex + 1) % PRODUCTION_ITEMS.length,
    },
  ];

  return (
    <>
      <section className="works-section" id="works">
        <div className="works-header">
          <h2 className="section-title">OUR WORKS</h2>
        </div>

        <div className="works-category">
          <div className="category-indicator">
            <div className="category-bar"></div>
            <span className="category-name">Showcases</span>
          </div>
        </div>

        <FadeIn className="works-carousel">
          <div className="carousel-track" ref={carouselRef}>
            {projects.map((project, i) => {
              const role = getRole(i);
              return (
                <div
                  key={project.id}
                  ref={(el) => {
                    slidesRef.current[i] = el;
                  }}
                  className={`carousel-slide carousel-slide-${role}`}
                  onClick={() => handleSlideClick(i)}
                  onKeyDown={(event) => handleSlideKeyDown(event, i)}
                  role={role !== "main" ? "button" : undefined}
                  tabIndex={role !== "main" ? 0 : undefined}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={540}
                    sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1200px) calc(100vw - 64px), 650px"
                  />
                </div>
              );
            })}
          </div>
          <div className="carousel-info" key={active.id}>
            <div className="carousel-info-left">
              <h3 className="carousel-title">{active.title}</h3>
              <p className="carousel-description">{active.desc}</p>
            </div>
            <div className="carousel-counter">
              <div>
                <span className="current-count">
                  {String(activeIndex + 1).padStart(2, "0")} /
                </span>
                <span className="total-count">
                  {" "}
                  {String(total).padStart(2, "0")}
                </span>
              </div>
              <a href="/works" className="btn-view-more">
                View More
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="production-clients-visual">
        <div className="clients-background" aria-hidden="true">
          <Image
            src="/assets/athlete-banner.webp"
            alt=""
            fill
            sizes="100vw"
            className="clients-background-img"
          />
        </div>
        <div className="clients-background-overlay" aria-hidden="true" />
        <div className="clients-background-glow" aria-hidden="true" />

        <section className="production-showcase" id="production-showcase">
          <FadeIn direction="left" className="production-left">
            <div className="production-category">
              <div className="category-indicator">
                <div className="category-bar"></div>
                <span className="category-name">Production</span>
              </div>
            </div>
            <div className="production-info">
              <h3 className="production-title">{activeProduction.title}</h3>
              <p className="production-type">{activeProduction.type}</p>
            </div>
            <div>
              <a href="/works" className="btn-view-more">
                View More
              </a>
            </div>
          </FadeIn>

          <FadeIn className="production-center">
            <div ref={productionVideoCardRef} className="production-video-card">
              <div className="production-video-stage">
                <div className="production-video-poster" aria-hidden="true">
                  <Image
                    src={activeProduction.thumbnail}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 80vw, 440px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <iframe
                  className={`production-video ${isProductionLoading ? "is-loading" : "is-ready"}`}
                  src={activeProduction.src}
                  title={activeProduction.alt}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  onLoad={() => setIsProductionLoading(false)}
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="production-right">
            <svg
              className="production-curve"
              width="470"
              height="769"
              viewBox="0 0 470 769"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M248.5 1.08203C316.631 1.08203 378.46 43.8128 423.308 113.205C468.148 182.586 495.918 278.501 495.918 384.5C495.918 490.499 468.148 586.414 423.308 655.795C378.46 725.187 316.631 767.918 248.5 767.918C180.369 767.918 118.54 725.187 73.6924 655.795C28.8518 586.414 1.08203 490.499 1.08203 384.5C1.08203 278.501 28.8518 182.586 73.6924 113.205C118.54 43.8128 180.369 1.08203 248.5 1.08203Z"
                stroke="url(#paint0_linear_113_495)"
                strokeWidth="2.16404"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_113_495"
                  x1="0"
                  y1="384.5"
                  x2="497"
                  y2="384.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="0.168269" stopColor="#999999" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="video-slot-container">
              {visibleProductionItems.map(({ item, slot, index }) => {
                const pos = PROD_SLOTS[slot];
                const isActiveThumbnail = index === activeProductionIndex;

                return (
                  <button
                    key={item.id}
                    className={`video-slot-item ${isActiveThumbnail ? "is-active" : ""}`}
                    type="button"
                    aria-label={`Show production video ${index + 1}`}
                    aria-pressed={isActiveThumbnail}
                    onClick={() => handleProductionChange(index)}
                    style={{
                      right: pos.right,
                      top: pos.top,
                      width: pos.width,
                      height: pos.height,
                      zIndex: pos.z,
                    }}
                  >
                    <Image
                      src={item.thumbnail}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 40vw, 250px"
                      style={{ objectFit: "cover" }}
                    />
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </section>
        {clientsSlot}
      </div>
    </>
  );
}
