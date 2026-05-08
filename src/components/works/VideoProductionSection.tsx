"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import FadeIn from "../FadeIn";
import { VIDEO_CATEGORIES, PRODUCTION_VIDEOS } from "./data";
import WorksArrow from "./WorksArrow";

const VIDEOS_PER_PAGE = 3;

const buildPlayableSrc = (src: string) => {
  const separator = src.includes("?") ? "&" : "?";

  return `${src}${separator}autoplay=0&mute=1`;
};

export default function VideoProductionSection() {
  const [videoCat, setVideoCat] = useState(VIDEO_CATEGORIES[0]);
  const [pageIndex, setPageIndex] = useState(0);
  const [loadedVideoMap, setLoadedVideoMap] = useState<Record<string, boolean>>(
    {},
  );
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
      index += VIDEOS_PER_PAGE
    ) {
      pages.push(filteredVideos.slice(index, index + VIDEOS_PER_PAGE));
    }

    return pages;
  }, [filteredVideos]);

  const totalPages = videoPages.length;
  useEffect(() => {
    swiperRef.current?.slideTo(0, 0);
  }, [videoCat]);

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
                    {page.map((video) => {
                      const isLoaded = loadedVideoMap[video.id] === true;

                      return (
                        <div key={video.id} className="wk-vp-page-card">
                          <div className="wk-vp-card-viewport">
                            <div
                              className={`wk-vp-poster-layer ${isLoaded ? "is-hidden" : ""}`}
                              aria-hidden="true"
                            >
                              <Image
                                src={video.thumbnail}
                                alt=""
                                fill
                                sizes="(max-width: 768px) calc(100vw - 40px), 318px"
                                className="wk-vp-poster-image"
                              />
                              <div
                                className="wk-vp-poster-overlay"
                                aria-hidden="true"
                              />
                              <div
                                className="wk-vp-loading-overlay"
                                aria-hidden="true"
                              >
                                <span className="wk-vp-loading-spinner" />
                              </div>
                            </div>
                            <iframe
                              className={`wk-vp-player ${isLoaded ? "is-ready" : "is-loading"}`}
                              src={buildPlayableSrc(video.src)}
                              title={video.alt}
                              loading="lazy"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              referrerPolicy="strict-origin-when-cross-origin"
                              onLoad={() => {
                                setLoadedVideoMap((current) => {
                                  if (current[video.id]) return current;

                                  return {
                                    ...current,
                                    [video.id]: true,
                                  };
                                });
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
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
