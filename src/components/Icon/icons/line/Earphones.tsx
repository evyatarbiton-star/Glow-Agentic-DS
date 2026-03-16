import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEarphones = ({
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
        d="M17 3a4 4 0 0 1 4 4v11a3 3 0 1 1-6 0v-7.535A4 4 0 0 1 17 3m-.998 5.734L17 9.31V15h2V7a2 2 0 1 0-2.998 1.734M19 17h-2v1a1 1 0 1 0 2 0zM7 3a4 4 0 0 0-4 4v11a3 3 0 1 0 6 0v-7.535A4 4 0 0 0 7 3m.999 5.734L7 9.31V15H5V7a2 2 0 1 1 2.999 1.734M5 17v1a1 1 0 1 0 2 0v-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEarphones;
