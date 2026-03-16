import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPinCode = ({
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
        d="M2 11a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  );
};
export default SvgPinCode;
