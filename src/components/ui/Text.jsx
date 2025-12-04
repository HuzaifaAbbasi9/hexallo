// src/components/ui/Text.jsx
import { textSize } from "@/constants/theme";
import { tw } from "@/utils/tw";

/**
 * @typedef {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'div'} TextElement
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl'} TextSize
 */

/**
 * @param {{
 *   as?: TextElement,
 *   size?: TextSize,
 *   className?: string,
 *   children: React.ReactNode,
 * }} props
 */
const Text = ({
  as = "p",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const Component = as;
  const baseSize = textSize[as]?.[size] || "";

  return (
    <Component className={tw(baseSize, className)} {...props}>
      {children}
    </Component>
  );
};

export default Text;
