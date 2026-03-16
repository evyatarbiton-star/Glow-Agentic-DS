import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDeleteLeft = ({
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
        d="M6.6 5.2A3 3 0 0 1 9 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H9a3 3 0 0 1-2.4-1.2l-4.2-5.6a2 2 0 0 1 0-2.4zm5.107 4.093a1 1 0 0 0-1.414 1.414L11.586 12l-1.293 1.293a1 1 0 0 0 1.414 1.414L13 13.414l1.293 1.293a1 1 0 0 0 1.414-1.414L14.414 12l1.293-1.293a1 1 0 0 0-1.414-1.414L13 10.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDeleteLeft;
