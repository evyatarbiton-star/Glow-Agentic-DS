import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCup7 = ({
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
        d="M4 4a2 2 0 0 0-2 2v2a8 8 0 0 0 14.245 5H18.5a3.5 3.5 0 1 0 0-7H18a2 2 0 0 0-2-2zm14 4c0 1.06-.206 2.074-.581 3H18.5a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCup7;
