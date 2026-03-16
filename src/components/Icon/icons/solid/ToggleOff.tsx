import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgToggleOff = ({
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
        d="M16 6a6 6 0 0 1 0 12H8A6 6 0 0 1 8 6zm-8 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgToggleOff;
