import { ArrowRightSm } from '@/assets/svgs';
import AnimatedTimer from '@/components/common/AnimatedTimer';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Image from '@/components/ui/Image';
import { SwiperSlider } from '@/components/ui/SwiperSlider';
import Text from '@/components/ui/Text';
import { DEALS_DATA } from '@/constants/data';
import { textSize } from '@/constants/theme';
import { useRef } from 'react';
import { SwiperSlide } from 'swiper/react';

const DealsSection = () => {
  const prevEl = useRef(null);
  const nextEl = useRef(null);
  return (
    <section>
      <Container>
        <div className="flex gap-4 lg:items-center max-lg:flex-col">
          <div className="max-w-[436px] w-full lg:space-y-8 max-lg:space-y-5">
            <div className="lg:space-y-[18px] max-lg:space-y-3.5 lg:max-w-[318px]">
              <Text
                as="p"
                size="lg"
                className="font-font-primary font-semibold text-light-500"
              >
                Blazing Deals
              </Text>
              <Text size="xs" className="text-light-700 font-primary">
                Don’t miss our most exciting limited-time offers and new-user
                specials.
              </Text>
              <Button variant="secondary" size="sm">
                Explore Offers Now
              </Button>
            </div>
            <div className="lg:space-y-7 max-lg:space-y-5 max-w-[375px] w-full">
              <Text
                size="xs"
                className="text-danger-100 font-medium font-primary"
              >
                Offer ends in...
              </Text>
              <AnimatedTimer targetDate="2025-12-31T23:59:59" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="relative w-full !rounded-2xl overflow-hidden">
              <SwiperSlider
                prevEl={prevEl}
                nextEl={nextEl}
                spaceBetween={14}
                slidesPerView={'auto'}
                loop={true}
                className="w-full [&_.swiper-slide-active_.deals-card]:border-[5px] [&_.swiper-slide-active_.deals-card]:border-secondary-100"
                breakpoints={{
                  300: { slidesPerView: 'auto', spaceBetween: 3 },
                  768: { slidesPerView: 'auto', spaceBetween: 10 },
                  1024: { slidesPerView: 'auto', spaceBetween: 14 },
                }}
              >
                {DEALS_DATA.map((deal) => (
                  <SwiperSlide key={deal.id} className="!w-fit">
                    <div className="xs:max-w-[354px] max-xs:max-w-[320px] aspect-[118/127] w-full shadow-[3.99px_3.99px_35.88px_0px_rgba(var(--dark-50).27)] bg-gradient-200 overflow-hidden deals-card !rounded-2xl relative">
                      <Image
                        src={deal.image}
                        className="size-full object-cover"
                      />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[201px] w-full lg:space-y-4 max-lg:space-y-3 text-center">
                        <div className="">
                          <Text
                            as="h4"
                            size="md"
                            className="font-black text-light-500"
                          >
                            {deal.title}
                          </Text>
                          <Text
                            as="h4"
                            size="md"
                            className="font-semibold text-light-500"
                          >
                            {deal.subtitle}
                          </Text>
                        </div>
                        <div className="lg:space-y-4 max-lg:space-y-3">
                          <Text
                            as="p"
                            size="md"
                            className="font-bold text-light-500 uppercase"
                          >
                            {deal.discountText}
                          </Text>
                          <Text
                            as="h4"
                            size="md"
                            className="font-bold text-light-500 uppercase leading-none flex items-end gap-1 justify-center"
                          >
                            {deal.discountValue}
                            <span
                              className={`align-text-bottom ${textSize.p.md}`}
                            >
                              {deal.discountLabel}
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </SwiperSlider>
              <button
                ref={prevEl}
                className="absolute max-lg:left-4 lg:left-10 top-1/2 -translate-y-1/2 bg-accent-50 lg:size-[33px] max-lg:size-[26px] rounded-full flex items-center justify-center z-10 group"
              >
                <ArrowRightSm className="h-2.5 w-auto rotate-180 text-light-800 transition-transform duration-300 ease-linear group-hover:scale-125" />
              </button>
              <button
                ref={nextEl}
                className="absolute max-lg:right-4 lg:right-10 top-1/2 -translate-y-1/2 bg-accent-50 lg:size-[33px] max-lg:size-[26px] rounded-full flex items-center justify-center z-10 group"
              >
                <ArrowRightSm className="h-2.5 w-auto text-light-800 transition-transform duration-300 ease-linear group-hover:scale-125" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DealsSection;
