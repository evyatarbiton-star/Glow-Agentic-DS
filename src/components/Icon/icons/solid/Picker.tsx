import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPicker = ({
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
        d="m11.853 8.853 3.293 3.293a.5.5 0 0 1 0 .707l-4.372 4.373a7.7 7.7 0 0 1-1.735 1.3L4.8 20.851a1.216 1.216 0 0 1-1.651-1.65l2.325-4.24c.35-.638.787-1.222 1.3-1.735l4.373-4.373a.5.5 0 0 1 .707 0"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M14.707 5.293 16.17 3.83a2.828 2.828 0 0 1 4 4l-1.463 1.463 1 1a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPicker;
