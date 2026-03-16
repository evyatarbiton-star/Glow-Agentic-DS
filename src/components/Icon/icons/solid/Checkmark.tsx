import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCheckmark = ({
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
        d="M17.11 5.336a2 2 0 0 1 .554 2.774l-6 9a2 2 0 0 1-3.078.304l-3-3a2 2 0 1 1 2.828-2.828l1.275 1.275 4.647-6.97a2 2 0 0 1 2.773-.555"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCheckmark;
