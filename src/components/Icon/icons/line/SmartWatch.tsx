import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSmartWatch = ({
  size = "md",
  color = "currentColor",
  ...props
}: IconProps) => {
  const px = resolveIconSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        d="M8.39 2.876 8 6h8l-.39-3.124A1 1 0 0 0 14.617 2H9.383a1 1 0 0 0-.992.876M8.39 21.124 8 18h8l-.39 3.124a1 1 0 0 1-.993.876H9.383a1 1 0 0 1-.992-.876M18 8h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9 20a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4zm-2-4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSmartWatch;
