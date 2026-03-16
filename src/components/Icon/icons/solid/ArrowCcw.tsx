import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowCcw = ({
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
        d="M12 5a6.99 6.99 0 0 0-5.71 2.95 1 1 0 1 1-1.63-1.158A9 9 0 1 1 3 12a1 1 0 1 1 2 0 7 7 0 1 0 7-7"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4 8a1 1 0 0 0 1 1h5a1 1 0 0 0 .707-1.707l-5-5A1 1 0 0 0 4 3z"
      />
    </svg>
  );
};
export default SvgArrowCcw;
