import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRoad = ({
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
        d="M11 2.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.219C10.62 2 10.48 2 10.2 2H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 2.76 4 3.04 4 3.6v16.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C4.76 22 5.04 22 5.6 22h4.6c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C11 21.62 11 21.48 11 21.2V19a1 1 0 1 1 2 0v2.2c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218c.107.055.247.055.527.055h4.6c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C20 21.24 20 20.96 20 20.4V3.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C19.24 2 18.96 2 18.4 2h-4.6c-.28 0-.42 0-.527.054a.5.5 0 0 0-.218.219C13 2.38 13 2.52 13 2.8V5a1 1 0 1 1-2 0zm1 7.2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoad;
