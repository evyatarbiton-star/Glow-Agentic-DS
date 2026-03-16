import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowDownRightCrFr = ({
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
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m3 14a.997.997 0 0 0 1-.985V9a1 1 0 1 0-2 0v3.586L9.707 8.293a1 1 0 0 0-1.414 1.414L12.586 14H9a1 1 0 1 0 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowDownRightCrFr;
