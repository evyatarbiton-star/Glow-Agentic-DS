import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgForward = ({
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
        d="M14 9a1 1 0 0 0-1-1H7a5 5 0 0 0-5 5v6a1 1 0 1 0 2 0v-6a3 3 0 0 1 3-3h6a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M21.707 9.707a1 1 0 0 0 0-1.414l-4-4A1 1 0 0 0 16 5v8a1 1 0 0 0 1.707.707z"
      />
    </svg>
  );
};
export default SvgForward;
