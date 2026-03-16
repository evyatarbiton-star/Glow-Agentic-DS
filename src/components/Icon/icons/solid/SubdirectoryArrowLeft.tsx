import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSubdirectoryArrowLeft = ({
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
        d="M3.293 15.293a1 1 0 0 0 0 1.414l4 4A1 1 0 0 0 9 20v-8a1 1 0 0 0-1.707-.707z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20 3a1 1 0 0 0-1 1v10a1 1 0 0 1-1 1h-6a1 1 0 1 0 0 2h6a3 3 0 0 0 3-3V4a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSubdirectoryArrowLeft;
