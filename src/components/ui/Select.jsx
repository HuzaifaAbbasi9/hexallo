// Select.jsx
import { textSize } from '@/constants/theme';
import { SelectContext, useSelectContext } from '@/context/SelectContext';
import { tw } from '@/utils/tw';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export function Select({ children, setIsOpen, className }) {
  const ref = useRef();
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  return (
    <SelectContext.Provider value={{ ref, menuRef }}>
      <div className={tw('relative w-full', className)} ref={ref}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}

export function SelectButton({ onClick, children, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={tw(
        `focus:ring-none relative flex w-full flex-1 items-center gap-2 rounded-lg border-none bg-accent-50 py-[10px] pl-10 pr-[15px] text-light-100 focus:outline-none rtl:pl-[15px] rtl:pr-10 ${textSize.p.xl}`,
        className
      )}
    >
      {children}
    </button>
  );
}

export function SelectMenu({
  isOpen,
  children,
  className,
  direction = 'down',
  fixedPosition = false,
}) {
  const { ref: parentRef, menuRef } = useSelectContext();
  const [position, setPosition] = useState(null);

  const calculatePosition = () => {
    if (!parentRef?.current || !menuRef?.current) return;

    const parentRect = parentRef.current.getBoundingClientRect();
    const menuHeight = menuRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    let top, left, width;

    width = parentRect.width;

    if (fixedPosition) {
      // Fixed positioning - relative to viewport
      left = parentRect.left;

      if (direction === 'up') {
        top = parentRect.top - menuHeight - 8;
      } else {
        top = parentRect.bottom + 8;
      }

      // Keep within viewport bounds
      if (top < 8) top = 8;
      if (top + menuHeight > viewportHeight - 8) {
        top = viewportHeight - menuHeight - 8;
      }
    } else {
      // Absolute positioning - relative to document
      left = parentRect.left + window.scrollX;

      if (direction === 'up') {
        top = parentRect.top + scrollY - menuHeight - 8;
      } else {
        top = parentRect.bottom + scrollY;
      }
    }

    setPosition({ top, left, width });
  };

  useLayoutEffect(() => {
    if (isOpen) {
      calculatePosition();

      const handleResize = () => calculatePosition();
      const handleScroll = () => calculatePosition();

      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, true); // Capture phase for all scrollable elements

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll, true);
      };
    }
  }, [isOpen, direction, fixedPosition]);

  if (!isOpen) return null;

  const menuStyle = {
    position: fixedPosition ? 'fixed' : 'absolute',
    top: position?.top ?? 0,
    left: position?.left ?? 0,
    width: position?.width ?? 'auto',
    zIndex: 9999999,
    margin: 0,
    transform: 'translateZ(0)', // Create new stacking context
  };

  return ReactDOM.createPortal(
    <ul
      ref={menuRef}
      style={menuStyle}
      className={tw(
        'max-h-60 overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg',
        className
      )}
    >
      {children}
    </ul>,
    document.body
  );
}


export function SelectOption({
  onSelect,
  value,
  children,
  className,
  isSelected,
}) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(value)}
        className={tw(
          'w-full px-3 py-2 text-left hover:bg-gray-100',
          isSelected ? 'bg-gray-200 text-primary-100 hover:bg-gray-200' : '',
          className
        )}
      >
        {children}
      </button>
    </li>
  );
}
