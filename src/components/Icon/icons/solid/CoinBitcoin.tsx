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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M10 5a1 1 0 1 1 2 0v1h1.5a3.5 3.5 0 0 1 2.45 6 3.5 3.5 0 0 1-2.45 6H12v1a1 1 0 1 1-2 0v-1H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1zm-1 6h4.5a1.5 1.5 0 0 0 0-3H9zm0 2v3h4.5a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCoinBitcoin;
