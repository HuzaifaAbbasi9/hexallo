import { ArrowRight, ArrowRightSm } from '@/assets/svgs';
import Container from '@/components/ui/Container';
import Image from '@/components/ui/Image';
import Text from '@/components/ui/Text';
import { GLOBAL_HIGHLIGHTS_DATA } from '@/constants/data';
import { textSize } from '@/constants/theme';

const GlobalHighlights = () => {
  return (
    <section className="lg:mt-[100px] lg:mb-[140px] max-lg:my-14">
      <Container className={'lg:space-y-6 max-lg:space-y-4'}>
        <Text
          as="p"
          size="lg"
          className="text-light-500 flex items-center gap-4"
        >
          <span className="font-primary font-bold">Global Highlights</span>
          <ArrowRightSm className="w-2 text-dark-50" />
        </Text>
        <div className="grid lg:grid-cols-4 md-lg:grid-cols-3 xs-md:grid-cols-2 gap-[13px]">
          {GLOBAL_HIGHLIGHTS_DATA.map((item, index) => (
            <div
              key={index}
              className="lg:rounded-2xl max-lg:rounded-xl overflow-hidden relative group"
            >
              <Image
                src={item.image}
                className="h-[387px] w-full object-cover aspect-[136.492/15]"
              />
              <div className="absolute bottom-0 left-0 lg:py-4 lg:px-7 max-lg:p-3 bg-dark-500/50 z-1 w-full text-accent-50 lg:translate-y-full transition-transform duration-300 ease-linear group-hover:lg:translate-y-0">
                <div className="space-y-1.5">
                  <Text as="p" size="sm" className="font-bold leading-none">
                    {item.title}
                  </Text>
                  <Text as="p" size="xs" className="font-medium leading-tight">
                    {item.description}
                  </Text>
                  <button className="flex items-center gap-1 group/button">
                    <span
                      className={`${textSize.p.xs} font-semibold leading-none`}
                    >
                      {item.action}
                    </span>
                    <ArrowRight className="w-[14px] h-auto transition-transform duration-200 ease-linear group-hover/button:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GlobalHighlights;
