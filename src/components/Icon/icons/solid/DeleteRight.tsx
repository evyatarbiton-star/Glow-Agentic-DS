import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDeleteRight = ({
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
        d="M17.4 5.2A3 3 0 0 0 15 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 2.4-1.2l4.2-5.6a2 2 0 0 0 0-2.4zm-5.107 4.093a1 1 0 1 1 1.414 1.414L12.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L11 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L9.586 12l-1.293-1.293a1 1 0 0 1 1.414-1.414L11 10.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDeleteRight;
