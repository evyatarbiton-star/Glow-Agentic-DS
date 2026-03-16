import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgChevronUp = ({
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
        d="M18.414 15.414a2 2 0 0 1-2.828 0L12 11.828l-3.586 3.586a2 2 0 1 1-2.828-2.828l5-5a2 2 0 0 1 2.828 0l5 5a2 2 0 0 1 0 2.828"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChevronUp;
