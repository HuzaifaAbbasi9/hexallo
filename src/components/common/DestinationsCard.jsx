import Image from '@/components/ui/Image';
import Text from '@/components/ui/Text';
import { tw } from '@/utils/tw';

const DestinationsCard = ({ item, className = '' }) => {
  return (
    <div
      className={tw(
        'transition-all duration-300 ease-linear rounded-2xl overflow-hidden group cursor-pointer h-fit bg-accent-50 hover:bg-primary-100 hover:border-primary-200/5 shadow-[4px_4px_26px_0px_rgba(var(--dark-100),0.1)] border border-dark-50/5 p-0',
        className
      )}
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={item.image}
          className="w-full overflow-hidden object-cover aspect-[1.44] transition-transform duration-300 ease-linear group-hover:scale-110"
        />
      </div>

      <div className="lg:p-5 max-lg:p-4 space-y-2">
        <Text
          as="p"
          size="xs"
          className="font-primary font-semibold text-dark-50"
        >
          {item.title}
        </Text>
        {item.checkIns && (
          <Text
            as="p"
            size="xs"
            className="font-primary text-dark-50/50 leading-none"
          >
            {item.checkIns}
          </Text>
        )}
        {item.description && (
          <Text
            as="p"
            size="xs"
            className="font-primary text-dark-50/50 transition-all duration-300 ease-linear line-clamp-3 leading-snug"
          >
            {item.description}
          </Text>
        )}
      </div>
    </div>
  );
};

export default DestinationsCard;
