import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRoute = ({
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
        d="M15 5a2 2 0 0 0-2 2v10a4 4 0 0 1-8 0V6h2v11a2 2 0 1 0 4 0V7a4 4 0 0 1 8 0v10h-2V7a2 2 0 0 0-2-2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6.864 3.48a1 1 0 0 0-1.728 0L3.377 6.497A1 1 0 0 0 4.241 8h3.518a1 1 0 0 0 .863-1.504z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoute;
