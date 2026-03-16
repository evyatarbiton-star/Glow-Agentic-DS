import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShift = ({
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
        d="M11.181 3.365a1.1 1.1 0 0 1 1.638 0l7.897 8.802c.633.706.136 1.829-.812 1.834l-2.879.018V19a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V14h-2.92c-.952 0-1.455-1.126-.82-1.835z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShift;
