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
        d="M21 20a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h16a1 1 0 0 0 1-1M6 15a2 2 0 1 0 4 0V5a2 2 0 1 0-4 0zm8 0a2 2 0 1 0 4 0V9a2 2 0 1 0-4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAlignVerticalBottom;
