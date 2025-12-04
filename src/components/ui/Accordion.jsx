import { PlusIcon } from "@/assets/svgs";
import Button from "@/components/ui/Button";
import { textSize } from "@/constants/theme";
import { tw } from "@/utils/tw";
import { AnimatePresence, motion } from "framer-motion";
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";

// Shared context between Accordion and Items
const AccordionContext = createContext();
const AccordionItemContext = createContext();

// Accordion parent — manages which index is open
export function Accordion({ children, className }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className={tw("w-full space-y-4", className)}>
        {Children.map(children, (child, index) =>
          cloneElement(child, { index }),
        )}
      </div>
    </AccordionContext.Provider>
  );
}

// Each item receives its index and communicates with Accordion
export function AccordionItem({ children, className, index }) {
  const { openIndex, setOpenIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  const toggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <AccordionItemContext.Provider value={{ isOpen, toggle }}>
      <div
        className={tw(
          "overflow-hidden rounded-xl border border-light-600",
          className,
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionButton({ children, className }) {
  const { isOpen, toggle } = useContext(AccordionItemContext);

  return (
    <Button
      variant="ghost"
      onClick={toggle}
      size="lg"
      className={tw(
        "w-full justify-between gap-2 text-left rtl:text-right",
        textSize.p.md,
        className,
      )}
    >
      <span>{children}</span>
      <motion.span
        initial={false}
        animate={{ rotate: isOpen ? 135 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-xl font-bold"
      >
        <PlusIcon />
      </motion.span>
    </Button>
  );
}

export function AccordionContent({ children, className }) {
  const { isOpen } = useContext(AccordionItemContext);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: "auto", opacity: 1 },
            collapsed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={tw("overflow-hidden", className)}
        >
          <div className="lg:px-[23.5px] lg:pb-[13.5px] max-lg:px-[17.5px] max-lg:pb-[10.5px]">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
