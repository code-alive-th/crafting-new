"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import FadeIn from "../FadeIn";
import { VIDEO_CATEGORIES, PRODUCTION_VIDEOS, type VideoItem } from "./data";
import WorksArrow from "./WorksArrow";

type Gsap = typeof import("gsap").gsap;

const VIDEOS_PER_PAGE = 3;

function VideoProductionCard({
  video,
  eager = false,
  isPageActive = false,
}: {
  video: VideoItem;
  eager?: boolean;
  isPageActive?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isActivated, setIsActivated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const gsapRef = useRef<Gsap | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setIsActivated(false);
  }, [video.id, video.src]);

  const playableSrc = `${video.src}${video.src.includes("?") ? "&" : "?"}autoplay=1`;

  useEffect(() => {
    let cancelled = false;
    const card = cardRef.current;
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
  }, [video.id]);

  return (
    <div className="wk-vp-page-card">
      <div ref={cardRef} className="production-video-card wk-vp-production-card">
        <div className="production-video-stage">
          <div className="production-video-poster" aria-hidden="true">
            <Image
              src={video.thumbnail}
              alt=""
              fill
              loading={eager ? "eager" : "lazy"}
              fetchPriority={eager ? "high" : "auto"}
              sizes="(max-width: 768px) calc(100vw - 40px), 318px"
              style={{ objectFit: "cover" }}
            />
          </div>
          {!isActivated && (
            <button
              className="wk-vp-play-button swiper-no-swiping"
              type="button"
              aria-label={`Play ${video.alt}`}
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                setIsActivated(true);
              }}
            >
              <span className="wk-vp-play-icon" aria-hidden="true" />
              <span className="wk-vp-play-text">Play</span>
            </button>
          )}
          {isPageActive && isActivated && (
            <iframe
              className={`production-video swiper-no-swiping ${isLoading ? "is-loading" : "is-ready"}`}
              src={playableSrc}
              title={video.alt}
              loading={eager ? "eager" : "lazy"}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setIsLoading(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function VideoProductionSection() {
  const [videoCat, setVideoCat] = useState(VIDEO_CATEGORIES[0]);
  const [pageIndex, setPageIndex] = useState(0);
  const [videosPerPage, setVideosPerPage] = useState(VIDEOS_PER_PAGE);
  const swiperRef = useRef<SwiperType | null>(null);

  const filteredVideos = useMemo(
    () =>
      PRODUCTION_VIDEOS.filter(
        (video) => videoCat === "" || video.category === videoCat,
      ),
    [videoCat],
  );

  const videoPages = useMemo(() => {
    const pages = [];

    for (
      let index = 0;
      index < filteredVideos.length;
      index += videosPerPage
    ) {
      pages.push(filteredVideos.slice(index, index + videosPerPage));
    }

    return pages;
  }, [filteredVideos, videosPerPage]);

  const totalPages = videoPages.length;

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    const updateVideosPerPage = () => {
      setVideosPerPage(query.matches ? 1 : VIDEOS_PER_PAGE);
    };

    updateVideosPerPage();
    query.addEventListener("change", updateVideosPerPage);

    return () => query.removeEventListener("change", updateVideosPerPage);
  }, []);

  useEffect(() => {
    setPageIndex(0);
    swiperRef.current?.slideTo(0, 0);
  }, [videoCat, videosPerPage]);

  const handlePrevPage = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextPage = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="wk-vp-section" id="production-showcase">
      <div className="wk-inner">
        <div className="wk-header-row">
          <FadeIn direction="up">
            <div className="wk-label-row">
              <div className="wk-label-accent" />
              <span className="wk-label-text">VIDEO PRODUCTION</span>
            </div>
          </FadeIn>
        </div>
        <FadeIn direction="up" delayMs={100}>
          <div className="wk-vp-tabs">
            {VIDEO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`wk-vp-tab ${videoCat === cat ? "wk-vp-tab--active" : ""}`}
                onClick={() => {
                  setVideoCat(cat);
                }}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="wk-vp-stage">
        <FadeIn>
          {videoPages.length > 0 ? (
            <Swiper
              className="wk-vp-swiper"
              slidesPerView={1}
              spaceBetween={0}
              speed={550}
              rewind={totalPages > 1}
              threshold={8}
              touchStartPreventDefault={false}
              preventClicks={false}
              preventClicksPropagation={false}
              noSwipingSelector=".swiper-no-swiping"
              simulateTouch
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setPageIndex(swiper.realIndex);
              }}
            >
              {videoPages.map((page, index) => (
                <SwiperSlide key={`video-page-${index}`}>
                  <div className={`wk-vp-page wk-vp-page--${page.length}`}>
                    {page.map((video, videoIndex) => (
                      <VideoProductionCard
                        key={video.id}
                        video={video}
                        eager={index === pageIndex && videoIndex === 0}
                        isPageActive={index === pageIndex}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="wk-vp-empty">
              No videos found for this category.
            </div>
          )}
        </FadeIn>

        {totalPages > 1 && (
          <div className="wk-vp-nav">
            <button
              className="wk-vp-arrow"
              onClick={handlePrevPage}
              aria-label="Previous page"
              type="button"
            >
              <WorksArrow direction="left" />
            </button>
            <div className="wk-vp-page-indicator">
              {String(pageIndex + 1).padStart(2, "0")} /{" "}
              {String(totalPages).padStart(2, "0")}
            </div>
            <button
              className="wk-vp-arrow"
              onClick={handleNextPage}
              aria-label="Next page"
              type="button"
            >
              <WorksArrow direction="right" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
