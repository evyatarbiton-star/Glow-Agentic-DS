import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCup5 = ({
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
        d="M2 19a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M5 4a3 3 0 0 0-3 3v1a8 8 0 0 0 14.245 5H18.5a3.5 3.5 0 1 0 0-7h-.67A3 3 0 0 0 15 4zm13 4c0 1.06-.206 2.074-.581 3H18.5a1.5 1.5 0 0 0 0-3zM4 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1A6 6 0 0 1 4 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCup5;
