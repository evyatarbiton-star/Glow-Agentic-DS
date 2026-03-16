import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlignVerticalCenter = ({
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
        d="M21 12a1 1 0 0 1-1 1h-3v-2h3a1 1 0 0 1 1 1m-6 1H9v-2h6zM4 13h3v-2H4a1 1 0 1 0 0 2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19 10a3 3 0 1 0-6 0v4a3 3 0 1 0 6 0zm-3-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-5-3a3 3 0 1 0-6 0v12a3 3 0 1 0 6 0zM8 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAlignVerticalCenter;
