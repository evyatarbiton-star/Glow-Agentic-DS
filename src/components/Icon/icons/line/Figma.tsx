import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFigma = ({
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
        d="M13 17.5A4.5 4.5 0 0 1 8.5 22H8a4 4 0 0 1-2.646-7A4 4 0 0 1 4 12a4 4 0 0 1 1.354-3A4 4 0 0 1 8 2h8a4 4 0 0 1 2.063 7.428A4 4 0 0 1 13 15.465zM11 4H8a2 2 0 1 0 0 4h3zM8 16a2 2 0 1 0 0 4h.5a2.5 2.5 0 0 0 2.5-2.5V16zm3-6v4H8a2 2 0 1 1 0-4zm2 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0m3-4h-3V4h3a2 2 0 1 1 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFigma;
