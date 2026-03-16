import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMedicalCross = ({
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
        d="M11 5a1 1 0 0 0-1 1v4H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-4V6a1 1 0 0 0-1-1zM8 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMedicalCross;
