import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRazor = ({
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
        d="M9 11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a3 3 0 1 1-6 0zm2 1v7a1 1 0 1 0 2 0v-7z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M7 2a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V8a3 3 0 1 0 0-6zm8 6H9v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zM7 6h10a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRazor;
