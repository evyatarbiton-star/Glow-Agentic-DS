import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWhistle = ({
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
        d="m16.108 10.954 3.056-.509A1 1 0 0 0 20 9.459V7a1 1 0 0 0-1-1h-2.172l-.06.06a3.207 3.207 0 0 1-4.536 0l-.06-.06H10a6 6 0 1 0 5.98 6.506zM13 4l.646.646a1.207 1.207 0 0 0 1.708 0L16 4h3a3 3 0 0 1 3 3v2.459a3 3 0 0 1-2.507 2.959l-1.52.253A8 8 0 1 1 10 4z"
        clipRule="evenodd"
      />
      <path fill={color} d="M12 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </svg>
  );
};
export default SvgWhistle;
