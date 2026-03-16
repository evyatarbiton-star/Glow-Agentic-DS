import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowDownLeftCrFr = ({
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M9 16a.997.997 0 0 1-1-.985V9a1 1 0 0 1 2 0v3.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 14H15a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowDownLeftCrFr;
