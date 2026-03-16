import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDoubleCheckmark = ({
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
        d="M14.555 5.168a1 1 0 0 1 .277 1.387l-8 12a1 1 0 0 1-1.54.152l-3-3a1 1 0 1 1 1.415-1.414l2.138 2.137 7.323-10.985a1 1 0 0 1 1.387-.277M21.555 5.168a1 1 0 0 1 .277 1.387l-8 12a1 1 0 0 1-1.54.152l-1-1a1 1 0 0 1 1.415-1.414l.138.137 7.323-10.985a1 1 0 0 1 1.387-.277"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDoubleCheckmark;
