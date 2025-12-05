import { ArrowRightSm } from '@/assets/svgs';
import DestinationsCard from '@/components/common/DestinationsCard';
import ProductCard from '@/components/common/ProductCard';
import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';

/**
 * @typedef {'primary' | 'secondary' | 'destinations' Variant
 */

/**
 * @param {{
 *   variant?: Variant,
 * }} props
 */
const ProductSection = ({
  title,
  items,
  className = '',
  variant = 'primary',
}) => {
  return (
    <section className={className}>
      <Container className={'lg:space-y-6 max-lg:space-y-4'}>
        {title && (
          <Text
            as="p"
            size="lg"
            className="text-light-500 flex items-center gap-4"
          >
            <span className="font-primary font-bold">{title}</span>
            <ArrowRightSm className="w-2 text-dark-50" />
          </Text>
        )}
        {items?.length && (
          <div className="grid lg:grid-cols-4 md-lg:grid-cols-3 xs-md:grid-cols-2 gap-2.5">
            {items.map((item, index) =>
              variant === 'destinations' ? (
                <DestinationsCard key={index} item={item} />
              ) : (
                <ProductCard key={index} item={item} variant={variant} />
              )
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductSection;
