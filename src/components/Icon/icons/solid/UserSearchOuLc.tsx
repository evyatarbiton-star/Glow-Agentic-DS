import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserSearchOuLc = ({
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
        d="M15 14c.218 0 .293.277.126.418A5.99 5.99 0 0 0 13 19v2.5a.5.5 0 0 1-.5.5H7a3 3 0 0 1-3-3 5 5 0 0 1 5-5zM12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 5.708 1.293l1 1a1 1 0 0 1-1.415 1.414l-1-1A3 3 0 0 1 15 18"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserSearchOuLc;
