import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export default function Popover({ isOpen, onClose, triggerRef, children }) {
  const [position, setPosition] = useState(null);
  const popoverRef = useRef(null);

  useEffect(() => {
    if (isOpen && triggerRef?.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen, triggerRef]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        !triggerRef.current.contains(e.target)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, triggerRef]);

  if (!isOpen || !position) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        ref={popoverRef}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          width: position.width,
          zIndex: 9999,
        }}
        className="rounded-md border border-gray-300 bg-white shadow-lg"
      >
        {children}
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
