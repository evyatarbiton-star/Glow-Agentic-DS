import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSignalLevel100 = ({
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
        d="M21 4a1 1 0 0 0-1.707-.707l-16 16A1 1 0 0 0 4 21h16a1 1 0 0 0 1-1z"
      />
    </svg>
  );
};
export default SvgSignalLevel100;
