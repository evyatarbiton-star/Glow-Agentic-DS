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
        fillRule="evenodd"
        d="M20 3a1 1 0 0 0-1 1v9a1 1 0 0 1-1 1H4a1 1 0 1 0 0 2h14a3 3 0 0 0 3-3V4a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.293 15.707a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L5.414 15l4.293 4.293a1 1 0 0 1-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSubdirectoryArrowLeft;
