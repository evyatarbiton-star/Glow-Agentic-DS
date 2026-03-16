import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFlag = ({
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
        d="M14 5a1 1 0 0 1 1-1h4.998a1 1 0 0 1 .843 1.537l-2.5 3.926a1 1 0 0 0 0 1.074l2.5 3.926A1 1 0 0 1 19.998 16H16a2 2 0 0 1-2-2zM8 3a1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zM4 3a1 1 0 0 1 2 0v18a1 1 0 1 1-2 0z"
      />
    </svg>
  );
};
export default SvgFlag;
