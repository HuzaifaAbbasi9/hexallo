import { SearchArrow } from '@/assets/svgs';
import Container from '@/components/ui/Container';
import IconButton from '@/components/ui/IconButton';
import Image from '@/components/ui/Image';
import { SwiperSlider } from '@/components/ui/SwiperSlider';
import Text from '@/components/ui/Text';
import { sectionSpacing, textSize } from '@/constants/theme';
import { SwiperSlide } from 'swiper/react';

const Hero = () => {
  return (
    <section className={`${sectionSpacing.Hero} max-lg:pb-8`}>
      <Container>
        <div className="relative">
          <SwiperSlider
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={true}
            className="lg:rounded-xl max-lg:rounded-md overflow-hidden !static [&_.swiper-pagination]:-bottom-8 [&_.swiper-pagination]:flex [&_.swiper-pagination]:items-center [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-3 [&_.swiper-pagination-bullet]:!mx-0 [&_.swiper-pagination-bullet]:lg:!size-3 [&_.swiper-pagination-bullet]:max-lg:!size-2 [&_.swiper-pagination-bullet]:!shrink-0 [&_.swiper-pagination-bullet]:bg-light-200 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet-active]:!bg-warning-50"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide
                key={i}
                className={`flex flex-col items-center transition-opacity duration-500 ease-in-out`}
              >
                <div className="relative">
                  <Image
                    src={'images/hero-banner.jpg'}
                    className="lg:aspect-[2.38/1] max-lg:aspect-video w-full object-cover"
                  />
                  <div className="absolute inset-0 size-full bg-light-300/30 z-1"></div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperSlider>
          <div className="absolute lg:top-1/2 left-1/2 lg:-translate-y-1/2 max-lg:bottom-4 -translate-x-1/2 max-w-[612px] w-full z-10 flex flex-col items-center justify-center text-center max-lg:space-y-2 max-lg:px-4">
            <Text
              as="h1"
              size="md"
              className="text-accent-50 font-bold lg:mb-7 leading-tight"
            >
              Discover, Book & Enjoy What’s Happening Around You
            </Text>
            <Text
              as="p"
              size="md"
              className="text-accent-50 font-semibold lg:mb-10 max-lg:text-[12px]"
            >
              From local events to world-famous experiences — all in one place.
            </Text>
            <div className="w-full rounded-xl overflow-hidden bg-accent-50 h-[37px] border-[1.75px] border-solid border-light-400 flex">
              <input
                className={`${textSize.p.xs} lg:max-w-[228px] max-lg:flex-1 w-full placeholder:text-light-50 text-light-50 !shadow-none !outline-none !ring-0 !px-4`}
                placeholder="Search any event"
              />
              <div className="flex-1 h-full lg:flex max-lg:hidden">
                <input
                  className={`${textSize.p.md} max-w-[228px] w-full placeholder:text-dark-300 text-dark-300 !shadow-none !outline-none !ring-0 !px-4`}
                  placeholder="Where"
                />
              </div>
              <div className="flex-1 h-full lg:flex max-lg:hidden">
                <input
                  className={`${textSize.p.md} max-w-[228px] w-full placeholder:text-dark-300 text-dark-300 !shadow-none !outline-none !ring-0 !px-4`}
                  placeholder="When"
                />
              </div>
              <div className='flex items-center lg:pr-2.5 max-lg:px-1.5'>
              <IconButton size='sm' className='rounded-xl w-9 h-[30px]'>
                <SearchArrow className="size-3" />
              </IconButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
