"use client";

import Button from "@/components/ui/Button";
import { textSize } from "@/constants/theme";
import { tw } from "@/utils/tw";
import { AnimatePresence, motion } from "framer-motion";
import { Children, cloneElement, createContext, useContext } from "react";

const TabsContext = createContext();

export const Tabs = ({ value, onChange, children, className }) => {
  return (
    <TabsContext.Provider
      value={{ activeIndex: value, setActiveIndex: onChange }}
    >
      <div className={tw("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabActions = ({ children, className }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isTwoTabs = Children.count(children) === 2;

  const handleParentClick = () => {
    if (isTwoTabs) {
      setActiveIndex(activeIndex === 0 ? 1 : 0);
    }
  };

  return (
    <div
      onClick={handleParentClick}
      className={tw("flex rounded-lg bg-light-500 shadow-sm", className)}
    >
      {Children.map(children, (child, index) => cloneElement(child, { index }))}
    </div>
  );
};

export const TabButton = ({ children, index, className }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = activeIndex === index;

  return (
    <Button
      onClick={() => setActiveIndex(index)}
      className={tw(
        "flex-1 rounded-lg border-b-2 border-none px-4 py-2 font-normal text-primary-100 hover:text-primary-100",
        textSize.p.md,
        isActive ? "bg-secondary-100 hover:bg-secondary-100" : "bg-transparent",
        className,
      )}
    >
      {children}
    </Button>
  );
};

export const TabContent = ({ children, className }) => {
  const { activeIndex } = useContext(TabsContext);

  return (
    <div className={tw("relative", className)}>
      <AnimatePresence mode="wait">
        {Children.map(children, (child, index) =>
          activeIndex === index ? cloneElement(child, { key: index }) : null,
        )}
      </AnimatePresence>
    </div>
  );
};

export const TabPanel = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={tw("py-4", className)}
    >
      {children}
    </motion.div>
  );
};
