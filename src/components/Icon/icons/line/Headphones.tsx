import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeadphones = ({
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
        d="M12 5a7 7 0 0 0-7 7v5.531a1 1 0 1 1-2 0V12a9 9 0 0 1 18 0v6a1 1 0 1 1-2 0v-6a7 7 0 0 0-7-7"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M15 15.955a3 3 0 0 1 6 0v2.09a3 3 0 1 1-6 0zm4 0v2.09a1 1 0 0 1-2 0v-2.09a1 1 0 1 1 2 0M3 15.955a3 3 0 0 1 6 0v2.09a3 3 0 0 1-6 0zm4 0v2.09a1 1 0 0 1-2 0v-2.09a1 1 0 1 1 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHeadphones;
