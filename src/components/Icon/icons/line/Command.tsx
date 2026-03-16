import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCommand = ({
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
        d="M3 6.5a3.5 3.5 0 1 1 7 0V8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 0 1 3 6.5M8 8V6.5A1.5 1.5 0 1 0 6.5 8zm2 6h4v-4h-4zm-2 2H6.5A1.5 1.5 0 1 0 8 17.5zm8 0v1.5a1.5 1.5 0 1 0 1.5-1.5zm0-8h1.5A1.5 1.5 0 1 0 16 6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCommand;
