import { ArrowRightSm } from '@/assets/svgs';
import Container from '@/components/ui/Container';
import Image from '@/components/ui/Image';
import Text from '@/components/ui/Text';
import { EXPLORE_GHANA_DATA } from '@/constants/data';
import { textSize } from '@/constants/theme';

const ExploreGhana = () => {
  return (
    <section>
      <Container className={'max-w-[1380px] lg:space-y-6 max-lg:space-y-4'}>
        <Text
          as="p"
          size="lg"
          className="text-light-500 flex items-center gap-4"
        >
          <span className="font-primary font-bold">Explore Ghana</span>
           <ArrowRightSm className="w-2 text-dark-50" />
        </Text>
        <div className="space-y-4">
          {EXPLORE_GHANA_DATA.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-4 max-lg:flex-wrap">
              {row.map((card) => (
                <div
                  key={card.id}
                  className={`${card.className} lg:h-[222px] max-lg:h-[160px] shrink-0 w-full rounded-2xl overflow-hidden bg-gray-300 group relative`}
                >
                  <Image
                    src={card.image}
                    className="size-full object-cover transition-transform duration-300 ease-linear group-hover:scale-110"
                  />
                  <div
                    className={`${
                      textSize.p.xs
                    } font-medium absolute lg:top-5 lg:left-7 max-lg:top-4 max-lg:left-4 w-12 h-[21px] rounded-5xl overflow-hidden flex items-center justify-center leading-none ${
                      card.ratingBlack
                        ? 'text-accent-50 bg-dark-500'
                        : 'bg-accent-50 text-dark-500'
                    }`}
                  >
                    {card.rating}
                  </div>
                  <div className="absolute lg:bottom-5 lg:left-7 max-lg:bottom-4 max-lg:left-4">
                    <Text
                      as="p"
                      size="xs"
                      className="font-primary font-semibold leading-relaxed text-accent-50"
                    >
                      {card.title}
                    </Text>
                    <Text
                      as="p"
                      size="xs"
                      className="lg:text-[10px] max-lg:text-[8px] font-primary text-accent-50 leading-relaxed"
                    >
                      {card.subtitle}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExploreGhana;
