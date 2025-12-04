import { lockScroll, unlockScroll } from "@/utils/scrollLockManager";
import { tw } from "@/utils/tw";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

const PopupContext = createContext();

const popupBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const popupContent = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 20, stiffness: 300 },
  },
  exit: { y: 50, opacity: 0, transition: { duration: 0.2 } },
};

const Popup = ({ isOpen, onClose, className, children }) => {
  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => unlockScroll();
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <PopupContext.Provider value={{ onClose }}>
          <motion.div
            className={tw(
              "fixed inset-0 z-[999999] flex size-full items-center justify-center bg-dark-100/80",
              className,
            )}
            variants={popupBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          >
            {children}
          </motion.div>
        </PopupContext.Provider>
      )}
    </AnimatePresence>
  );
};

const Body = ({ children, className }) => {
  const { onClose } = useContext(PopupContext);

  return (
    <motion.div
      className={tw(
        "relative flex max-h-[calc(100svh-40px)] w-full flex-col overflow-y-auto rounded-2xl bg-accent-100 p-6 text-dark-100 lg:max-w-[731px] max-lg:max-w-[calc(100vw-40px)]",
        className,
      )}
      variants={popupContent}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="sticky right-0 top-0 ml-auto bg-accent-100 text-light-300 backdrop-blur lg:text-[29px] max-lg:text-[25px]"
      >
        <MdOutlineClose />
      </button>
      {children}
    </motion.div>
  );
};

Popup.Body = Body;
export default Popup;
