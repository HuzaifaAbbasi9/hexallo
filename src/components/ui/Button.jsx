// src/components/ui/Button.jsx
import { buttonSizes, buttonVariants } from "@/constants/theme";
import { tw } from "@/utils/tw";

/**
 * @typedef {'primary' | 'secondary' | 'outline' | 'tertiary' | 'info' | 'ghost'} Variant
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
const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  onClick = () => {},
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-300";
  const variantClasses = buttonVariants[variant] || "";
  const sizeClasses = buttonSizes[size] || "";

  return (
    <button
      onClick={onClick}
      className={tw(base, variantClasses, sizeClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
