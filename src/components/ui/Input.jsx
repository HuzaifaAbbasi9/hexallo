import { textSize } from "@/constants/theme";
import { tw } from "@/utils/tw";

// InputGroup Component
export const InputGroup = ({ children, className = "" }) => {
  return <div className={tw(`space-y-1 ${className}`)}>{children}</div>;
};

// InputLabel Component
export const InputLabel = ({ htmlFor, children, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={tw(`block text-sm font-medium text-gray-700 ${className}`)}
    >
      {children}
    </label>
  );
};

// Input Component
export const Input = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={tw(
        `w-full rounded-md border px-3 py-2 ${textSize.p.xl} focus:ring-none focus:outline-none ${className}`,
      )}
    />
  );
};
