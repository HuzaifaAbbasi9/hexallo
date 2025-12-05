import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import { FOOTER_LINKS, FOOTER_SOCIAL_LINKS } from '@/constants/data';
import { textSize } from '@/constants/theme';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary-50 md:py-2.5 max-md:py-3">
      <Container>
        <div className="flex items-center max-lg:gap-5 lg:gap-10 max-lg:flex-col">
          <Text as="p" size="md" className="text-accent-50 lg:pr-5 max-lg:order-3">
            All rights reserved Hexallo LLC 2023
          </Text>
          <div className="flex items-center lg:gap-6 max-lg:gap-1 max-md:flex-col max-lg:order-1">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className={`${textSize.p.md} font-medium transition-opacity ease-linear duration-300 hover:opacity-75 text-accent-50`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3.5 lg:ml-auto max-lg:order-2">
            {FOOTER_SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="lg:h-6 max-lg:h-5 w-auto transition-opacity duration-300 ease-linear hover:opacity-70" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
