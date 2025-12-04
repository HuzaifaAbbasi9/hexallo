import { ArrowDown } from '@/assets/svgs';
import Container from '@/components/ui/Container';
import {
  Select,
  SelectButton,
  SelectMenu,
  SelectOption,
} from '@/components/ui/Select';
import { Tooltip } from '@/components/ui/Tooltip';
import { TOPBAR_LINKS } from '@/constants/data';
import { hoverEffect, textSize } from '@/constants/theme';
import { tw } from '@/utils/tw';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const getFlag = (code) => `https://flagcdn.com/${code.toLowerCase()}.svg`;

  const [selectedValues, setSelectedValues] = useState({});

  return (
    <Container className="flex justify-end max-lg:gap-2">
      {TOPBAR_LINKS.map((link, i) => {
        const isOpen = openDropdown === i;

        return (
          <React.Fragment key={i}>
            {link.dropdown ? (
              <Select
                isOpen={isOpen}
                setIsOpen={(open) => setOpenDropdown(open ? i : null)}
                className="w-fit"
              >
                <Tooltip content={link.key} position="top" className="w-full">
                  <SelectButton
                    onClick={() => handleToggle(i)}
                    className={`${textSize.p.xs} text-light-50 lg:py-[9px] max-lg:py-[7px] lg:px-2 max-lg:px-0`}
                  >
                    <div className="flex w-full items-center lg:gap-2 max-lg:gap-1 whitespace-nowrap">
                      {link.icon &&
                        (() => {
                          const Icon = link.icon;
                          return (
                            <div className="lg:size-[14px] max-lg:size-3">
                              <Icon />
                            </div>
                          );
                        })()}
                      {(selectedValues[link.key]?.flag || link.flag) && (
                        <img
                          className="lg:h-[15px] lg:w-[21px] max-lg:h-[12px] max-lg:w-[17px] lg:rounded max-lg:rounded-sm object-cover"
                          src={getFlag(
                            selectedValues[link.key]?.flag || link.flag
                          )}
                          alt={selectedValues[link.key]?.flag || link.flag}
                        />
                      )}
                      <div className="flex items-start lg:gap-2 max-lg:gap-1.5">
                        <span className="line-clamp-1 leading-tight">
                          {selectedValues[link.key]?.label || link.key}
                        </span>
                        <ArrowDown
                          className={`ms-auto transition-transform duration-300 ease-linear lg:w-2 max-lg:w-1.5 lg:mt-1.5 max-lg:mt-1 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </SelectButton>
                </Tooltip>

                <SelectMenu isOpen={isOpen} className="min-w-fit">
                  {link.dropdown.map((opt, index) => (
                    <SelectOption
                      key={`${opt.value}-${index}`}
                      value={opt.value}
                      // isSelected={selectedValues[link.key]?.value === opt.value}
                      onSelect={() => {
                        setSelectedValues((prev) => ({
                          ...prev,
                          [link.key]: opt,
                        }));
                        setOpenDropdown(null);
                      }}
                      className={`${textSize.p.xs} whitespace-nowrap`}
                    >
                      {opt.label}
                    </SelectOption>
                  ))}
                </SelectMenu>
              </Select>
            ) : (
              <Link
                to={link.href}
                className={tw(
                  `${textSize.p.xs} ${hoverEffect.after} text-light-50 py-[9px] px-2 relative transition-all duration-200 group leading-none flex items-center gap-1.5 max-lg:hidden`
                )}
              >
                <span className="relative z-2">{link.key}</span>
              </Link>
            )}
          </React.Fragment>
        );
      })}
      <div className="lg:flex lg:items-center max-lg:hidden">
        <Link
          to={'/sign-in'}
          className={tw(
            `${textSize.p.xs} text-dark-200 py-[9px] px-2 relative transition-all duration-200 group leading-none flex items-center gap-1.5 hover:opacity-75`
          )}
        >
          <span className="relative z-2">Sign In</span>
        </Link>
        <span>|</span>
        <Link
          to={'/sign-up'}
          className={tw(
            `${textSize.p.xs} text-dark-200 py-[9px] px-2 relative transition-all duration-200 group leading-none flex items-center gap-1.5 hover:opacity-75`
          )}
        >
          <span className="relative z-2">Up</span>
        </Link>
      </div>
      <Link
        to={'/sign-in'}
        className={tw(
          `${textSize.p.xs} text-secondary-50 py-[9px] px-2 font-medium relative transition-all duration-200 group leading-none flex items-center gap-1.5 hover:opacity-75 max-lg:hidden`
        )}
      >
        <span className="relative z-2">Business</span>
      </Link>
      <Link
        to={'/sign-in'}
        className={tw(
          `${textSize.p.xs} text-dark-50 py-[9px] px-2 font-bold relative transition-all duration-200 group leading-none flex items-center gap-1.5 hover:opacity-75 max-lg:hidden`
        )}
      >
        <span className="relative z-2">Create Event</span>
      </Link>
    </Container>
  );
};

export default TopBar;
