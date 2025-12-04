import { Calendar, Clock, Heart, Location } from '@/assets/svgs';
import IconButton from '@/components/ui/IconButton';
import Image from '@/components/ui/Image';
import Text from '@/components/ui/Text';

const ProductCard = ({ item }) => {
  return (
    <div className="bg-primary-100 transition-all duration-300 ease-linear hover:bg-primary-200 rounded-2xl p-2 shadow-[0px_24px_90px_rgba(var(--dark-400),0.22)] border-2 border-accent-50 group cursor-pointer h-fit">
      <div className="relative">
        <Image
          src={item.image}
          className="w-full rounded-xl overflow-hidden object-cover aspect-[1.44]"
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
        <div className="py-1.5 px-2.5 rounded-lg bg-primary-200 grid place-items-center w-fit transition-all duration-300 ease-linear group-hover:bg-secondary-100">
          <Text as="p" size="xs" className="font-primary text-dark-50">
            {item.category}
          </Text>
        </div>
        <Text
          as="p"
          size="xs"
          className="font-primary font-semibold text-dark-500 leading-loose my-1.5"
        >
          {item.title}
        </Text>

        {item.date && (
          <Text
            as="p"
            size="xs"
            className="font-primary text-light-600 leading-none flex items-center mb-1.5"
          >
            <Calendar className="w-0 transition-all duration-300 ease-linear group-hover:size-[13px] group-hover:mr-2" />
            {item.date}
          </Text>
        )}

        <Text
          as="p"
          size="xs"
          className="font-primary text-light-600 leading-none flex items-center"
        >
          <Clock className="w-0 transition-all duration-300 ease-linear group-hover:size-[13px] group-hover:mr-2" />
          {item.time}
        </Text>
        <Text
          as="p"
          size="xs"
          className="font-primary text-light-600 my-1.5 leading-none flex items-center"
        >
          <Location className="w-0 transition-all duration-300 ease-linear group-hover:size-[13px] group-hover:mr-2" />
          {item.location}
        </Text>
        <Text
          as="p"
          size="xs"
          className="font-primary text-light-600 leading-loose"
        >
          From <span className="font-bold text-dark-500">{item.price}</span>
        </Text>
        <Text
          as="p"
          size="xs"
          className="font-primary text-dark-600 leading-relaxed transition-all duration-300 ease-linear group-hover:max-h-28 line-clamp-3 max-h-0"
        >
          {item.description}
        </Text>
      </div>
    </div>
  );
};

export default ProductCard;
