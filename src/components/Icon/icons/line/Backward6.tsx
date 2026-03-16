import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBackward6 = ({
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
        d="M22 13a7 7 0 0 0-7-7H5a1 1 0 0 0 0 2h10a5 5 0 1 1-5 5 1 1 0 1 0-2 0 7 7 0 1 0 14 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 6.293a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L4.414 7l1.293-1.293a1 1 0 0 0-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBackward6;
