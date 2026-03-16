import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgGift = ({
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
        d="M4 12h16v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 10a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M7 6a3 3 0 0 1 5-2.236A3 3 0 1 1 14 9h-1v12h-2V9h-1a3 3 0 0 1-3-3m4 1V6a1 1 0 1 0-1 1zm2-1v1h1a1 1 0 1 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGift;
