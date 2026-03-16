import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlignVerticalBottom = ({
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
        d="M21 20a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h16a1 1 0 0 0 1-1M5 14a3 3 0 1 0 6 0V6a3 3 0 0 0-6 0zm3 1a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m5-1a3 3 0 1 0 6 0v-4a3 3 0 1 0-6 0zm3 1a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAlignVerticalBottom;
