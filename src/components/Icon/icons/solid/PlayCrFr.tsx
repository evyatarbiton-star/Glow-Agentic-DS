import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPlayCrFr = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M10.513 8.145A1 1 0 0 0 9 9.003v5.994a1 1 0 0 0 1.513.858l4.997-2.988a1.01 1.01 0 0 0 0-1.734z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPlayCrFr;
