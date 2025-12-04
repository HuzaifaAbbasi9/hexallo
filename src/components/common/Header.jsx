import { ArrowRight } from '@/assets/svgs';
import Navbar from '@/components/common/NavBar';
import TopBar from '@/components/common/TopBar';
import {
  Accordion,
  AccordionButton,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Image from '@/components/ui/Image';
import { NAV_LINKS, TOPBAR_LINKS } from '@/constants/data';
import { textSize } from '@/constants/theme';
import { lockScroll, unlockScroll } from '@/utils/scrollLockManager';
import { tw } from '@/utils/tw';
import { AnimatePresence, motion } from 'framer-motion';
import useCurrentWidth from 'hooks/useCurrentWidth';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const isMobile = useCurrentWidth();
  const location = useLocation();
  useEffect(() => {
    if (menuOpen && isMobile) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => unlockScroll();
  }, [menuOpen, isMobile]);

  useEffect(() => {
    const currentNav = NAV_LINKS.find(
      (nav) =>
        nav.href === location.pathname ||
        nav.subNav?.some((sub) => sub.href === location.pathname)
    );
    setActiveNav(currentNav || NAV_LINKS[0]);
  }, [location.pathname]);

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };
  const headerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const header = headerRef.current;
      if (header) {
        window.HEADER_HEIGHT = header.offsetHeight;
      }
    }
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-[99999]">
      <TopBar />
      <div
        className={
          'relative z-50 bg-dark-100 max-lg:h-[37px] max-lg:flex max-lg:items-center'
        }
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            <Link to={'/'} className="flex items-center">
              <Image
                src={'/images/logo.png'}
                className="lg:max-w-[97px] max-lg:max-w-[80px]"
              />
            </Link>
            <Navbar
              className="max-lg:hidden"
              links={NAV_LINKS}
              onNavClick={handleNavClick}
              activeNavKey={activeNav?.key}
            />
            <button
              className="text-accent-50 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </button>
          </div>
        </Container>
      </div>
      {activeNav?.subNav && (
        <div className={'relative z-50 bg-light-100'}>
          <Container>
            <Navbar
              className="max-lg:hidden justify-center"
              navLinkClassName="text-light-50"
              navActiveLinkClass="after:bg-secondary-50"
              links={activeNav.subNav}
            />
          </Container>
        </div>
      )}

      <AnimatePresence>
        {menuOpen && (
          <>
            <div
              onClick={() => {
                setMenuOpen(false);
              }}
              className="fixed inset-0 size-full z-[999] bg-dark-50/50"
            ></div>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '-1%' }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 max-w-80 z-[9999] h-full max-h-screen w-full flex-col overflow-y-auto bg-dark-50 p-4 lg:hidden max-lg:flex space-y-3"
            >
              <Accordion className={'space-y-0'}>
                {NAV_LINKS.map((nav, index) => (
                  <AccordionItem
                    className={
                      'border-0 border-b rounded-none border-accent-50'
                    }
                    key={index}
                  >
                    <AccordionButton
                      className={
                        'text-accent-50 capitalize lg:px-0 max-lg:px-0 max-lg:py-2'
                      }
                    >
                      {nav.key.replace(/_/g, ' ')}
                    </AccordionButton>
                    <AccordionContent className={'border-t border-t-accent-50'}>
                      <div className="flex flex-col divide-y divide-accent-50">
                        {nav.subNav.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className={tw(
                              `${textSize.p.sm} capitalize py-2 rounded-none text-left text-accent-50 transition-colors flex items-center justify-between group`,
                              location.pathname === sub.href && 'font-semibold'
                            )}
                          >
                            <span>{sub.key.replace(/_/g, ' ')}</span>
                            <ArrowRight className="size-4 transition-transform duration-300 ease-linear group-hover:translate-x-1" />
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>{' '}
              <div className="!mt-0">
                {TOPBAR_LINKS.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={tw(
                      `${textSize.p.md} capitalize py-2 rounded-none border-b border-b-accent-50 last:border-b-0 text-left text-accent-50 transition-colors flex items-center justify-between group`,
                      location.pathname === link.href && 'font-semibold'
                    )}
                  >
                    <span>{link.key.replace(/_/g, ' ')}</span>
                    <ArrowRight className="size-4 transition-transform duration-300 ease-linear group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
              <Button variant="primary" className="px-5">
                Sign In
              </Button>
              <Button variant="primary" className="px-5">
                Sign Up
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
