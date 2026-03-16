import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDispenser = ({
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
        d="M9 2a3 3 0 0 0-3 3v5h8V7h2.172a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 1 0 1.414-1.414l-1.414-1.414A3 3 0 0 0 16.172 5H14a3 3 0 0 0-3-3zm3 4V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3h4z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9 8a5 5 0 0 0-5 5v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a5 5 0 0 0-5-5zm5 5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3zm-8 2v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDispenser;
