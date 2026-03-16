import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUpArrow = ({
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
        d="M12 10a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M12.707 2.293a1 1 0 0 0-1.414 0l-4 4A1 1 0 0 0 8 8h8a1 1 0 0 0 .707-1.707z"
      />
    </svg>
  );
};
export default SvgUpArrow;
