import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUpLeftDownRightArrow = ({
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
        d="M20.707 20.707a1 1 0 0 0 0-1.414l-16-16a1 1 0 0 0-1.414 1.414l16 16a1 1 0 0 0 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 4a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H5v6a1 1 0 1 1-2 0zM21 20a1 1 0 0 1-1 1h-7a1 1 0 1 1 0-2h6v-6a1 1 0 1 1 2 0z"
      />
    </svg>
  );
};
export default SvgUpLeftDownRightArrow;
