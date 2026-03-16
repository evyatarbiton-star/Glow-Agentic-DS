import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShoppingTag = ({
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
        d="M10.414 4.172A4 4 0 0 1 13.243 3H18a3 3 0 0 1 3 3v4.757a4 4 0 0 1-1.172 2.829l-6.537 6.537a3 3 0 0 1-4.242 0L3.877 14.95a3 3 0 0 1 0-4.242zM13.243 5a2 2 0 0 0-1.415.586l-6.537 6.537a1 1 0 0 0 0 1.414l5.172 5.172a1 1 0 0 0 1.414 0l6.537-6.537A2 2 0 0 0 19 10.757V6a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.586 10 6 8.586 15.414 18 14 19.414zM17 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  );
};
export default SvgShoppingTag;
