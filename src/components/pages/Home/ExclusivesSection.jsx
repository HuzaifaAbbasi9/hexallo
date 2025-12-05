import { ArrowRight, ArrowRightSm } from '@/assets/svgs';
import Container from '@/components/ui/Container';
import Image from '@/components/ui/Image';
import Text from '@/components/ui/Text';
import { EXCLUSIVES_DATA } from '@/constants/data';
import { textSize } from '@/constants/theme';

const ExclusivesSection = ({ className }) => {
  return (
    <section className={className}>
      <Container className={'lg:space-y-6 max-lg:space-y-4'}>
        <Text
          as="p"
          size="lg"
          className="text-light-500 flex items-center gap-4"
        >
          <span className="font-primary font-bold">Exclusives</span>
          <ArrowRightSm className="w-2 text-dark-50" />
        </Text>
        <div className="grid md:grid-cols-2 gap-[13px]">
          {EXCLUSIVES_DATA.map((item, index) => (
            <div
              key={index}
              className="lg:rounded-2xl max-lg:rounded-xl overflow-hidden relative group"
            >
              <Image src={item.image} className="size-full object-cover" />
              <div className="absolute bottom-0 left-0 lg:py-4 lg:px-7 max-lg:p-3 bg-dark-500/50 z-1 w-full text-accent-50 lg:translate-y-full transition-transform duration-300 ease-linear group-hover:lg:translate-y-0">
                <div className="max-w-[531px] lg:space-y-3 max-lg:space-y-1.5">
                  <Text as="p" size="md" className="font-bold leading-none">
                    {item.title}
                  </Text>
                  <Text as="p" size="xs" className="leading-tight">
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

export default ExclusivesSection;
