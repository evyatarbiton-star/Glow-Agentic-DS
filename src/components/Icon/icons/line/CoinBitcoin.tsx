import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCoinBitcoin = ({
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
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 6a1 1 0 0 0-1 1h-1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1a1 1 0 1 0 2 0 3 3 0 0 0 2.236-5A3 3 0 0 0 13 7a1 1 0 0 0-1-1m0 9h1a1 1 0 1 0 0-2h-3v2zm-2-4h3a1 1 0 1 0 0-2h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCoinBitcoin;
