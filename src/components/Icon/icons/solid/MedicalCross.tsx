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
        d="M11 3a2 2 0 0 0-2 2v4H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4V5a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMedicalCross;
