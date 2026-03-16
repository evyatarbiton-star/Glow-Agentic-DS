import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserCheckOuLc = ({
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
        d="M9 16a3 3 0 0 0-3 3 1 1 0 0 0 1 1h6a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3 5 5 0 0 1 5-5h7a1 1 0 1 1 0 2zM12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M22.707 16.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L18 19.586l3.293-3.293a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserCheckOuLc;
