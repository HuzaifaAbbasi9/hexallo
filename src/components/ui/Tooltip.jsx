import { tw } from "@/utils/tw";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";


export function Tooltip({
  children,
  content,
  position = "top",
  className,
  messageStyle,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [positionReady, setPositionReady] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({});
  const tooltipRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (targetRef.current && tooltipRef.current) {
          const targetRect = targetRef.current.getBoundingClientRect();
          const tooltipRect = tooltipRef.current.getBoundingClientRect();
          const offset = 8;
          const isRTL = document.documentElement.classList.contains("rtl");

          let positionStyles = {};

          if (position === "top") {
            positionStyles = {
              top: `${targetRect.top - tooltipRect.height - offset + window.scrollY}px`,
              left: isRTL
                ? `${targetRect.right - tooltipRect.width + window.scrollX}px`
                : `${targetRect.left + window.scrollX}px`,
            };
          }

          setTooltipPosition(positionStyles);
          setPositionReady(true);
        }
      }, 0);

      return () => clearTimeout(timer);
    } else {
      setPositionReady(false);
    }
  }, [isVisible, position]);

  return (
    <div
      ref={targetRef}
      className={tw("relative inline-block", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {isVisible &&
        ReactDOM.createPortal(
          <motion.div
            ref={tooltipRef}
            className={tw(
              `absolute z-[9999] max-w-xs whitespace-normal rounded-lg bg-gray-700 px-3 py-2 text-sm text-white shadow-lg`,
              messageStyle,
            )}
            style={{
              ...tooltipPosition,
              visibility: positionReady ? "visible" : "hidden", // Hide until position is ready
              position: "absolute",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: positionReady ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {content}
          </motion.div>,
          document.body,
        )}
    </div>
  );
}
