import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditSemicircle5 = ({
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
        d="M17 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m-1-1a1 1 0 0 1-1 1h-3a6 6 0 1 0 0 12h3a1 1 0 1 1 0 2h-3a8 8 0 1 1 0-16h3a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M17 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditSemicircle5;
