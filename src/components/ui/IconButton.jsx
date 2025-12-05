import { iconButtonSizes, iconButtonVariants } from "@/constants/theme";
import { tw } from "@/utils/tw";

/**
 * @typedef {'primary' | 'secondary' | 'outline', | 'ghost'} Variant
 * @typedef {'xs' |'sm' | 'md' | 'lg' | 'xl' } Size
 */

/**
 * @param {{
 *   variant?: Variant,
 *   size?: Size,
 *   className?: string,
 *   children: React.ReactNode,
 * }} props
 */
const IconButton = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full";
  const variantClasses = iconButtonVariants[variant] || "";
  const sizeClasses = iconButtonSizes[size] || "";

  return (
    <button
      className={tw(base, variantClasses, sizeClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
