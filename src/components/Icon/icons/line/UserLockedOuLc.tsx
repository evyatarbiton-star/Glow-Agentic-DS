import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserLockedOuLc = ({
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
        d="M9 16a3 3 0 0 0-3 3 1 1 0 0 0 1 1h5a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3 5 5 0 0 1 5-5h5a1 1 0 1 1 0 2zM12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M22 19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1v-1a3 3 0 1 1 6 0zm-4-1a1 1 0 1 1 2 0v1h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserLockedOuLc;
