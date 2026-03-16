import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowBigLeft = ({
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
        d="M2 12a1 1 0 0 0 1 1h18a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 11.293a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 12l6.293-6.293a1 1 0 0 0-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowBigLeft;
