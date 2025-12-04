"use client";

import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

export const SwiperSlider = ({
  children,
  spaceBetween = 20,
  slidesPerView = 1,
  pagination = false,
  autoplay = false,
  loop = true,
  breakpoints,
  prevEl,
  nextEl,
  className = "",
  ...rest
}) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevEl?.current && nextEl?.current) {
      swiperRef.current.params.navigation.prevEl = prevEl.current;
      swiperRef.current.params.navigation.nextEl = nextEl.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevEl, nextEl]);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={false}
      pagination={pagination}
      autoplay={autoplay}
      loop={loop}
      breakpoints={breakpoints}
      className={className}
      {...rest}
    >
      {children}
    </Swiper>
  );
};
