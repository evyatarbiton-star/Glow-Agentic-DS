import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgControl = ({
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
        d="M11.293 3.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414L12 5.414l-7.293 7.293a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgControl;
