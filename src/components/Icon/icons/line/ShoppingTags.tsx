import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShoppingTags = ({
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
        fillRule="evenodd"
        d="M21 6a1 1 0 0 1 1 1v4.757a4 4 0 0 1-1.172 2.829l-5.12 5.121a1 1 0 0 1-1.415-1.414l5.121-5.121A2 2 0 0 0 20 11.757V7a1 1 0 0 1 1-1M4.293 10.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.414 5.172A4 4 0 0 1 12.243 4H15a3 3 0 0 1 3 3v2.757a4 4 0 0 1-1.172 2.829l-6.537 6.537a3 3 0 0 1-4.242 0L2.877 15.95a3 3 0 0 1 0-4.242zM12.243 6a2 2 0 0 0-1.415.586l-6.537 6.537a1 1 0 0 0 0 1.414l3.172 3.172a1 1 0 0 0 1.414 0l6.537-6.537A2 2 0 0 0 16 9.757V7a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
      <path fill={color} d="M14 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
  );
};
export default SvgShoppingTags;
