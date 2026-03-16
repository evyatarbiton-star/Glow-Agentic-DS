import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowRightCrFr = ({
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
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m12.707 16.707 4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L13.586 11H8a1 1 0 1 0 0 2h5.586l-2.293 2.293a1 1 0 0 0 1.414 1.414"
      />
    </svg>
  );
};
export default SvgArrowRightCrFr;
