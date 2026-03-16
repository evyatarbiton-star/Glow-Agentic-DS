import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMedicalChart = ({
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
        d="M8.041 3.498C7.996 3.226 7.776 3 7.5 3H7a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-.5c-.276 0-.496.226-.541.498A3 3 0 0 1 13 6h-2a3 3 0 0 1-2.959-2.502M9 15a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-1-3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMedicalChart;
