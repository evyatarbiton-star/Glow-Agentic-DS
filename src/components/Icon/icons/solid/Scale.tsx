import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgScale = ({
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
        d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3M17 8.414 12.414 13H14a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v1.586L15.586 7H14a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgScale;
