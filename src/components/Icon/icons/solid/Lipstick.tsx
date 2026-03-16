import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLipstick = ({
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
        d="M14 14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M7 10a2 2 0 0 0-2 2v2.268A2 2 0 0 0 4 16v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-1-1.732V12a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6 5a3 3 0 0 1 3-3 1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
      />
    </svg>
  );
};
export default SvgLipstick;
