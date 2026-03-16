import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMerge = ({
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
        d="M7 8a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0v-4c.836.628 1.874 1 3 1h6a1 1 0 1 0 0-2h-6a3 3 0 0 1-3-3"
      />
      <path
        fill={color}
        d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6M18 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      />
    </svg>
  );
};
export default SvgMerge;
