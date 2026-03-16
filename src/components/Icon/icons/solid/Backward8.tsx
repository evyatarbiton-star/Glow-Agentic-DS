import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBackward8 = ({
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
        d="M15 20a7 7 0 0 1-4.899-12H5a1 1 0 0 1 0-2h10a7 7 0 1 1 0 14"
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
export default SvgBackward8;
