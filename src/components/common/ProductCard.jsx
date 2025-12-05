import { Calendar, Clock, Heart, Location, Star } from '@/assets/svgs';
import IconButton from '@/components/ui/IconButton';
import Image from '@/components/ui/Image';
import Text from '@/components/ui/Text';
import { cardVariants } from '@/constants/theme';
import { tw } from '@/utils/tw';

/**
 * @typedef {'primary' | 'secondary'} Variant
 */

/**
 * @param {{
 *   variant?: Variant,
 * }} props
 */

const ProductCard = ({ item, variant = 'primary', className = '' }) => {
  const base =
    'transition-all duration-300 ease-linear rounded-2xl p-2 overflow-hidden group cursor-pointer h-fit';
  const variantClasses = cardVariants[variant] || '';

  return (
    <div className={tw(base, variantClasses, className)}>
      <div className="relative rounded-xl overflow-hidden">
        <Image
          src={item.image}
          className="w-full overflow-hidden object-cover aspect-[1.44] transition-transform duration-300 ease-linear group-hover:scale-110"
        />
        {item.date && (
          <IconButton
            className="bg-primary-200 border-primary-200 absolute top-[14px] right-[14px] text-secondary-50 hover:text-accent-50 opacity-0 group-hover:opacity-100 transition-all duration-300"
            size="xs"
          >
            <Heart className="h-3" />
          </IconButton>
        )}
      </div>

      <div className="px-3 mt-[14px]">
        {item.category && (
          <div className="py-1.5 px-2.5 rounded-lg bg-primary-200 grid place-items-center w-fit transition-all duration-300 ease-linear group-hover:bg-secondary-100">
            <Text as="p" size="xs" className="font-primary text-dark-50">
              {item.category}
            </Text>
          </div>
        )}
        <div className="flex items-center gap-4">
          <Text
            as="p"
            size="xs"
            className="font-primary font-semibold leading-loose my-1.5 text-dark-500 flex-1"
          >
            {item.title}
          </Text>
          {item.rating && (
            <div className="flex items-center gap-1.5">
              <Star className="size-2" />
              <Text as="h6" size="xs" className="text-light-600 leading-none font-medium">
                {item.rating}
              </Text>
            </div>
          )}
        </div>

        {item.date && (
          <Text
            as="p"
            size="xs"
            className="font-primary text-light-600 leading-none flex items-center mb-1.5"
          >
            <Calendar className="lg:w-0 max-lg:size-[13px] max-lg:mr-2 transition-all duration-300 ease-linear group-hover:size-[13px] group-hover:mr-2" />
            {item.date}
          </Text>
        )}

        {item.time && (
          <Text
            as="p"
            size="xs"
            className="font-primary text-light-600 leading-none flex items-center"
          >
            <Clock className="lg:w-0 max-lg:size-[13px] max-lg:mr-2 transition-all duration-300 ease-linear group-hover:size-[13px] group-hover:mr-2" />
            {item.time}
          </Text>
        )}

        {item.location && (
          <Text
            as="p"
            size="xs"
            className="font-primary text-light-600 my-1.5 leading-none flex items-center"
          >
            <Location className="lg:w-0 max-lg:size-[13px] max-lg:mr-2 transition-all duration-300 ease-linear group-hover:size-[13px] group-hover:mr-2" />
            {item.location}
          </Text>
        )}

        {item.time && (
          <Text
            as="p"
            size="xs"
            className="font-primary text-light-600 leading-loose"
          >
            From <span className="font-bold text-dark-500">{item.price}</span>
          </Text>
        )}

        {item.description && (
          <Text
            as="p"
            size="xs"
            className="font-primary text-dark-600 leading-relaxed transition-all duration-300 ease-linear lg:group-hover:max-h-28 line-clamp-3 lg:max-h-0"
          >
            {item.description}
          </Text>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
