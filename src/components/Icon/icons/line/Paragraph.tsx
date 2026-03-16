import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgParagraph = ({
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
        d="M8 4h4a5 5 0 0 1 0 10H9v5a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m1 8h3a3 3 0 1 0 0-6H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgParagraph;
