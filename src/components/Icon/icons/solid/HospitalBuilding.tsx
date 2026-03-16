import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHospitalBuilding = ({
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
        d="M18 10a1 1 0 0 1 1-1 3 3 0 0 1 3 3v6a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M5 4a3 3 0 0 0-3 3v11a2 2 0 0 0 2 2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a2 2 0 0 0 2-2V7a3 3 0 0 0-3-3zm4 4a1 1 0 0 0-1 1v1H7a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V9a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHospitalBuilding;
