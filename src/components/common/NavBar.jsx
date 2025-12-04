import { textSize } from '@/constants/theme';
import { tw } from '@/utils/tw';
import { Link, useLocation } from 'react-router-dom';

export const NavLink = ({
  href,
  children,
  navLinkClassName = '',
  navActiveLinkClass = '',
  onNavigate,
  onClick,
  isTopLevel = false,
  isActiveParent = false,
}) => {
  const { pathname } = useLocation(); 
  const isActive = pathname === href || isActiveParent;

  // Update handleClick:
  const handleClick = (e) => {
    if (isTopLevel) {
      e.preventDefault();
    }
    if (onClick) onClick();
    if (onNavigate) onNavigate();
  };

  // Replace Link with conditional component:
  const Component = isTopLevel ? 'button' : Link;
  const linkProps = isTopLevel ? {} : { to: href };
  return (
    <Component
      {...linkProps}
      onClick={handleClick}
      className={tw(
        ` ${
          textSize.p.xs
        } font-normal capitalize lg:h-[37px] text-accent-50 flex items-center px-2 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full ${
          isActive
            ? `${navActiveLinkClass} font-semibold after:bg-secondary-100`
            : 'transition-opacity duration-300 ease-linear hover:opacity-80'
        } ${navLinkClassName}`
      )}
    >
      {children.replace(/_/g, ' ')}
    </Component>
  );
};

const Navbar = ({
  className = '',
  onNavigate,
  navLinkClassName = '',
  navActiveLinkClass = '',
  links = [],
  onNavClick,
  activeNavKey,
}) => {
  return (
    <nav className={`flex ${className}`}>
      {links.map(({ key, href, subNav }) => (
        <NavLink
          key={key}
          href={href}
          labelKey={key}
          onNavigate={onNavigate}
          navLinkClassName={navLinkClassName}
          navActiveLinkClass={navActiveLinkClass}
          onClick={() => onNavClick && onNavClick({ key, href, subNav })}
          isTopLevel={!!subNav}
          isActiveParent={activeNavKey === key}
        >
          {key}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
